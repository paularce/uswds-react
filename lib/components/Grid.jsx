import React, { PropTypes } from 'react';

/**
 * Column container aka Grid.
 * You should put columns inside a Grid
 * @param {[bool]} full defaults to false -- if true, removes padding
 * @param {[node]} children Children
 * @returns {[node]} the rendered DOM node
 */
export function Grid ({full, children}) {
  return (
    <div className={full ? '' : 'grid-container'}>
      <div class="grid-row">
        {children}
      </div>
    </div>
  );
}

Grid.propTypes = {
  full: PropTypes.bool,
  children: PropTypes.node.isRequired
};

Grid.defaultProps = {
  full: false
};

/**
 * Column that goes in a Grid that makes a grid
 * @param {[string]} width width of the column
 * @param {[node]} children Children
 * @returns {[node]} the rendered DOM node
 */
export function Col({classes, children}) {
  return (
    <div className={classes}>
      {children}
    </div>
  );
}

Col.propTypes = {
  classes: PropTypes.string.isRequired,
  children: PropTypes.node
};
