import React, { Component } from 'react';

import "../../node_modules/uikit/src/less/uikit.theme.less";

/**
* A WrokPage component
*/
class WrokPage extends Component {
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
    const ministry = (
      <article className="uk-comment uk-align-center">
        <header className="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid="">
          <img className="uk-comment-avatar" src="img/bcministry.png" width="100" height="100" alt=""/>
          <div className="uk-width-expand uk-comment-intro">
            <p className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="#">Front End/Web Application Developer</a></p>
            <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                <li><a href="#">201806 - 201812, 201905 - Present</a></li>
                <li><a href="#" uk-icon="location">Ministry of Social Development and Poverty Reduction</a></li>
            </ul>
          </div>
        </header>
        <hr />
        <div className="uk-comment-body uk-align-center">
            <p>Work on Node.js application developed using the Meteor web framework, React UI pattern and making extensive use of the d3.js visualization library</p>
            <p>Create private node packages for reusable components from the website project</p>
            <p>Experience the continuous integration development process through project management service like Gitlab, Azure DevOps</p>
            <p>Create virtual machine using Oracle Virtual Box. Set up and maintained the Gitlab server</p>
        </div>
      </article>
    );

    return (
      <div id="two" className="work">
        <div className="section-container uk-card uk-card-default uk-card-body uk-align-center">
          <div uk-slider="center: true">
            <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1">
              <ul className="uk-slider-items uk-child-width-1-2@s uk-grid">
                <li className="uk-width-3-4">
                  <div className="uk-card uk-card-default">
                    {ministry}
                  </div>
                </li>
                <li className="uk-width-3-4">
                  <div className="uk-card uk-card-default">
                    <img className="" src="img/bctransit.png" width="110" height="110" alt=""/>
                  </div>
                </li>
                <li className="uk-width-3-4">
                  <div className="uk-card uk-card-default">
                    <img className="" src="img/maximus.png" width="110" height="110" alt=""/>
                  </div>
                </li>
              </ul>
              <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
              <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
            </div>
            <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
          </div>
        </div>
      </div>

    );
  }
}
export default WrokPage;