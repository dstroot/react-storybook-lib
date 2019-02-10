/**
 * This component uses Troy Hunt's "Have I been Pwned" API:
 * https://haveibeenpwned.com/API/v2
 *
 * It checks if a specific passowrd has ever been found in a cracked
 * password breach, and if so, how many times.
 *
 * It requires external libraries:
 * `yarn add js-sha1 numeral`
 */

// https://medium.com/@baphemot/understanding-react-suspense-1c73b4b0b1e6

import React from 'react';
import PropTypes from 'prop-types';
import sha1 from 'js-sha1';
import { fetchWithCacheText } from '../../utils/cache';
import numeral from 'numeral';

// Class components can bail out from rendering when their input props
// are the same using PureComponent or shouldComponentUpdate. Now you
// can do the same with function components by wrapping them in React.memo.
const Pwned = React.memo(function Pwned({ password }) {
  const sha = sha1(password).toUpperCase();

  // fetch the data
  const list = fetchWithCacheText(
    'https://api.pwnedpasswords.com/range/' + sha.substring(0, 5)
  );
  const passlist = list.split('\n');

  // filter list
  const result = passlist.filter(
    item => item.split(':')[0] === sha.substring(5, 40)
  );

  // get count from filtered result
  let count = result.toString().split(':')[1] || 0;

  // return message
  return <p>{formatMessage(count)}</p>;
});

Pwned.propTypes = {
  password: PropTypes.string.isRequired,
};

export default Pwned;

// format the message
const formatMessage = count => {
  let message = '';
  let formattedCount = numeral(count).format('0,0');

  // format message
  if (count === 1) {
    message = `This password was found ${formattedCount} time in compromised password databases!`;
  }
  if (count > 1) {
    message = `This password was found ${formattedCount} times in compromised password databases!`;
  }

  return message;
};
