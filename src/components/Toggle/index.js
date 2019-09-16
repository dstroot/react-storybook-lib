import React from 'react';
import PropTypes from 'prop-types';

// styles
import './styles.scss';

/**
  Toggle is a component ...
 */

const Toggle = ({ isOn, handleToggle, onColor }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
        style={{ background: isOn && onColor }}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

Toggle.propTypes = {
  /** Should be set to "true" if the form has been submitted */
  isOn: PropTypes.bool.isRequired,
  /** Success is a string that takes either "yes", "no", or "wait" */
  handleToggle: PropTypes.func.isRequired,
  /** Success is a string that takes either "yes", "no", or "wait" */
  onColor: PropTypes.string,
};

export default Toggle;
