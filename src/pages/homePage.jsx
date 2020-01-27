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
        <div className="section-container uk-card uk-card-default uk-card-body uk-align-center">
          <article className="uk-comment uk-align-center">
            <header className="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid="">
              <img className="uk-comment-avatar" src="img/selfi.png" width="110" height="110" alt=""/>
              <div className="uk-width-expand uk-comment-intro">
                <p className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="#">Computer Science Student with Statistic Minor from Univerity of Victoria</a></p>
                <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                    <li><a href="https://github.com/MCatherine1994" uk-icon="github"></a></li>
                    <li><a href="https://www.linkedin.com/in/da-catherine-meng-568800146/" uk-icon="linkedin"></a></li>
                    <li><a href="#" uk-icon="mail" uk-tooltip="dmeng@uvic.ca"></a></li>
                </ul>
              </div>
            </header>
            <hr />
            <div className="uk-comment-body uk-align-center">
                <p>Programming Language: JAVA, C, Python, HTML/CSS/Javascript, React.js, D3.js, SQL</p>
                <p>Database: Oracle, PostgreSQL, MongoDB</p>
                <p>Project Management: Git, GitLab, Azure DevOps</p>
                <p>Environment: Windows, Linux</p>
                <p>Statistic: Matlab, R/RStudio</p>
            </div>
          </article>
          {/* <div className="home-img">
            <img className="img-model" src="img/selfi.png"/>
          </div>	 */}
        </div>
      </div>
    );
  }
}
export default HomePage;