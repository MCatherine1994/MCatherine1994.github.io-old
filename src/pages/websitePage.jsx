import React, { Component } from 'react';

require("../../node_modules/uikit/src/less/uikit.theme.less");

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
        <nav className="uk-align-right" uk-sticky="bottom: #offset">
          <ul>
            <li><a href="#one">Home</a></li>
            <li><a href="#two">Experience</a></li>
            <li><a href="#three">Resume</a></li>
            <li><a href="#four">Project</a></li>
            <li><a href="#five">Contact</a></li>
          </ul>
        </nav>
        HITHISIS DAMENG
      </div> 
    );
  }
}
export default Website;