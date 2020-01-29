import PropTypes from 'prop-types';
import React, { Component } from 'react';

import "../../node_modules/uikit/src/less/uikit.theme.less";

/**
* A CardContainer component
*/
class CardContainer extends Component {
  /**
  * Initialize the React element
  * @param {props} props React element properties
  */
  constructor(props) {
    super(props);
  }

  /**
  * Renders a website component
  * @returns {JSX} returns React element
  */
  render() {
    const { children } = this.props;
    return (
      <div className="card-container uk-card uk-card-default uk-card-body uk-align-center">
        {children}
      </div>
    );
  }
}

CardContainer.defaultProps = {
  children: null,
};

CardContainer.propTypes = {
  children: PropTypes.object,
};

export default CardContainer;