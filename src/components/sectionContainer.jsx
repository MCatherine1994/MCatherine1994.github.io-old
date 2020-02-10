import PropTypes from 'prop-types';
import React, { Component } from 'react';

import "../../node_modules/uikit/src/less/uikit.theme.less";
import "./sectionContainer.less";

/**
* A SectionContainer component
*/
class SectionContainer extends Component {
  /**
  * Renders a website component
  * @returns {JSX} returns React element
  */
  render() {
    const { children } = this.props;
    return (
      <div className="section-container uk-card uk-card-default uk-card-body uk-align-center">
        {children}
      </div>
    );
  }
}

SectionContainer.defaultProps = {
  children: null,
};

SectionContainer.propTypes = {
  children: PropTypes.object,
};

export default SectionContainer;