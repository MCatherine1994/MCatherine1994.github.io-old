import React, { Component } from 'react';

import SectionContainer from '../components/sectionContainer';
import CommentContainer from '../components/commentContainer';

import "../../node_modules/uikit/src/less/uikit.theme.less";

/**
* A WorkPage component
*/
class WorkPage extends Component {
  /**
  * Initialize the React element
  * @param {props} props React element properties
  */
  constructor(props) {
    super(props);
    this.getMinistryE = this.getMinistryE.bind(this);
  }

  /**
  * Render ministry work experience
  * @returns {JSX} returns React element
  */
  getMinistryE() {
    const mIntro = (
      <div style={{ textAlign: 'left' }}>
        <p>- Work on Node.js application developed using the Meteor web framework, React UI pattern and making extensive use of the d3.js visualization library</p>
        <p>- Create private node packages for reusable components from the website project</p>
        <p>- Experience the continuous integration development process through project management service like Gitlab, Azure DevOps</p>
        <p>- Create virtual machine using Oracle Virtual Box. Set up and maintained the Gitlab server</p>   
      </div>
    );

    const style = {
      color: "#89918C", 
      fontFamily: "'Times New Roman', Times, serif",
      fontSize: "0.95em",
    };

    const metaList = (
      <React.Fragment>
        <li><a href="#" style={style}>201806 - 201812, 201905 - Present</a></li>
        <li><a href="#" uk-icon="location" style={style}>Ministry of Social Development and Poverty Reduction</a></li>
      </React.Fragment>
    );

    return (
      <CommentContainer
        commentBody={mIntro}
        commentMeta={metaList}
        commentTitle="Front End/Web Application Developer"
        commentImage={<img className="uk-comment-avatar" src="img/bcministry.png" width="100" height="100" alt="" />}
      />
    );
  }

  /**
  * Renders a website component
  * @returns {JSX} returns React element
  */
  render() {
    const ministry = this.getMinistryE();

    return (
      <div id="two" className="work">
        <SectionContainer>
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
        </SectionContainer>
      </div>

    );
  }
}
export default WorkPage;