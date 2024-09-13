import React, { Component } from 'react';
import HomePage from './homePage';
import WorkPage from './workPage';
import ProjectPage from './projectPage'; 

import "../../node_modules/uikit/src/less/uikit.theme.less";
import "./websitePage.less";

/**s
* A Website component
*/
class Website extends Component {
  /**
  * Renders a website component
  * @returns {JSX} returns React element
  */
  render() { 
    return (
      <div className="website-page">
        <div>
          <h2 className="uk-align-center website-title">H I T H I S I S</h2>
          <h4 className="uk-align-center website-subtitle">DA MENG</h4>
        </div>
        
        <nav className="website-navbar" data-uk-navbar> 
          <ul>
            <li><a href="#one">Home</a></li>
            <li><a href="#two">Experience</a></li>
            <li><a href="#three">Project</a></li>
            <li><a href="#four">More</a></li>
          </ul>
        </nav>

        <HomePage />
        <WorkPage />
        <ProjectPage />
      </div> 
    );
  }
}
export default Website;