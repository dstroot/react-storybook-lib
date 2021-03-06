import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

/**
 * https://jonsuh.com/hamburgers/
 * Let's use CSS rather than JS to animate the burger menu
 */

const HamButton = ({ toggler, clicked }) => {
  let classes = 'hamburger hamburger--squeeze';
  if (clicked) {
    // Trigger the active state by appending class name is-active
    classes = 'hamburger hamburger--squeeze is-active';
  }
  return (
    <div
      className={classes}
      onClick={toggler}
      tabIndex="0"
      aria-label="Menu"
      aria-controls="navigation"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </div>
  );
};

export default HamButton;

HamButton.propTypes = {
  /** Function to toggle button clicked state */
  toggler: PropTypes.func.isRequired,
  /** Should be set to "true" if the button has been clicked */
  clicked: PropTypes.bool.isRequired,
};
