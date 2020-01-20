import React, { Component } from 'react';
import HomePage from './homePage';

import "../../node_modules/uikit/src/less/uikit.theme.less";
import "./websitePage.less";

/**s
* A Website component
*/
class Website extends Component {
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
      <div className="website-page">
        <div>
          <h2 className="uk-align-center">H I T H I S I S</h2>
          <h4 className="uk-align-center">DA MENG</h4>
        </div>
        
        <nav className="uk-align-left"> 
          <ul>
            <li><a href="#one">Home</a></li>
            <li><a href="#two">Experience</a></li>
            <li><a href="#three">Project</a></li>
            <li><a href="#four">Contact</a></li>
          </ul>
        </nav>
        <HomePage />
      </div> 
    );
  }
}
export default Website;