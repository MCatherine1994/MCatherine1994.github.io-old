import React, { Component } from 'react';

import "../../node_modules/uikit/src/less/uikit.theme.less";

/**
* A HomePage component
*/
class HomePage extends Component {
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
    return (
      <div id="one" className="home">
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <h2>H I T H I S I S</h2>
          <h4>DA MENG</h4>
        </div>
        
        <div className="home-container uk-card uk-card-default uk-card-body uk-align-center">
          <img className="img-model" src="/public/img/selfi.png"/>			
        </div>
      </div>
    );
  }
}
export default HomePage;