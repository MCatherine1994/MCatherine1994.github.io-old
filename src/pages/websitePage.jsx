import PropTypes from 'prop-types';
import React, { Component } from 'react';


/**
* A Website component
*/
class Website extends Component {
  /**
  * Initialize the React element
  * @param {props} props React element properties
  */
  constructor(props) {
    super(props);
    this.state = { anyState: true };
    this.handleChange = this.handleChange.bind(this);
  }

  /**
  * Renders a website component
  * @returns {JSX} returns React element
  */
  render() {
    return (
      <div>
        HITHISIS DAMENG
      </div> 
    );
  }
}
export default Website;

Website.defaultProps = {
};

Website.propTypes = {
};