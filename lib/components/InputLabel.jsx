import React, { PropTypes } from 'react';

/**
 * Label for form fields
 * @returns {node} the rendered DOM node
 * @param {string} label required - text for the input's label
 * @param {string} htmlFor required - sets the <label for... attribute
 * @param {bool} hasError -  edds error styling
 * @param {bool} required -  edds required styling
 */

export default function InputLabel ({label, htmlFor, requiredhasError}) {
  let classes = 'usa-label';
  classes += required ? ' usa-input--required' : '';
  classes += hasError ? ' usa-input--error' : '';
  return (
    <label
      id={`${htmlFor}-label`}
      className={classes}
      htmlFor={htmlFor}>
      {label}
    </label>
  );
}

InputLabel.propTypes = {
  hasError: PropTypes.bool,
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool
};
