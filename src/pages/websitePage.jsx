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
      <div>
        <nav className="uk-align-center" uk-sticky="bottom: #offset">
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