import React from 'react';
import PropTypes from 'prop-types';
import Utilities from '../helpers/utilities';

/**
 * Checkbox with label
 *
 * Required props:
 * - label, string -- the text for the label
 *
 * Optional props:
 * - id, string -- sets the textarea's id attribute the label's for attribute. Required for 508 compliance.
 * - value, string -- sets the value attribute. If not provided, the id is used instead.
 * - name, string, defaults to 'checkboxs' -- sets the name attribute. Each item in a fieldset should have the same name.
 * - checked, bool -- if true, the control is selected (checked) by default.
 * - disabled, bool -- if true, disables the control so it can not be toggled.
 */
export default class Checkbox extends React.Component {
  /**
   * check to see if an Id was passed in, if not generate one.
   */
  componentWillMount() {
    this.id = this.props.id ? this.props.id : Utilities.uniqueIdForComponent(this);
  }

  /**
   * Renders the component.
   * @returns {Node} The rendered DOM node.
   */
  render() {
    const {label, value, name, className, disabled, id = this.id, ...otherProps} = this.props;
    return (
      <div className={`usa-checkbox ${className}`}>
        <input
          id={id}
          class="usa-checkbox__input"
          type="checkbox"
          name={name}
          value={value ? value : id}
          disabled={disabled || false}
          {...otherProps} />
        <label className="usa-checkbox__input" htmlFor={id}>{label}</label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

Checkbox.defaultProps = {
  name: 'checkboxes',
  defaultChecked: false
};
