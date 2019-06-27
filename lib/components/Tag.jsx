import React, { Component, PropTypes } from 'react';

/**
 * A tag draws attention to new or categorized content elements.
 *
 * Required props:
 * - children: node, usually text to display within the tag
 *
 * Optional props:
 * - classes: string, additional classes
 */

export class Tag extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.string
  };

  static defaultProps = {
    classes: ''
  };

  render() {
    return (
      <span class={`usa-tag ${this.props.classes}`}>
        {this.props.children}
      </span>
    );
  }
}