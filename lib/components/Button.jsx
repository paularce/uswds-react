import React from 'react';

/**
 * Provides a standard button component.
 */
export default class Button extends React.Component {
  /**
   * Constructor.
   *
   * @param {Object} props The props that will be applied to this component.
   */
  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
  }

  /**
   * Handles button click
   */
  _handleClick() {
    this.props.onClick();
  }

  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render() {

    // local vars
    let className = ['usa-button'];
    let disabled = '';

    // disabled
    if (this.props.disabled) {

      // disable button
      className.push('usa-button--disabled');
      disabled = 'disabled';
    }


    // big
    if (this.props.size === 'big') {
      className.push('usa-button--big');
    }

    // handle status
    if (this.props.status !== '') {
      className.push('usa-button--' + this.props.status);
    }

    return (
      <button 
      type={type}
      className={className}
      disabled={disabled}
      onClick={this._handleCLick}>
        {this.props.text}
      </button>
    );
  }
}

Button.defaultProps = {
  secondaryStyle: '',
  size: '',
  status: ''
};

// size
Button.SIZE_BIG = 'big';

// status
Button.STATUS_ACTIVE = 'active';
Button.STATUS_HOVER = 'hover';

Button.propTypes = {
  disabled: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  size: React.PropTypes.oneOf(['', Button.SIZE_BIG]),
  status: React.PropTypes.oneOf(['', Button.STATUS_ACTIVE, Button.STATUS_HOVER]),
  text: React.PropTypes.string.isRequired,
  type: React.PropTypes.string
};

yButton.defaultProps = {
  disabled: false,
  size: '',
  status: '',
  type: 'button'
};
