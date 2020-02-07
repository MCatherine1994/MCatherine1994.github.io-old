import React, { Component } from 'react';

import SectionContainer from '../components/sectionContainer';
import CommentContainer from '../components/commentContainer';
import CardContainer from '../components/cardContainer';

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
    this.getTransitE = this.getTransitE.bind(this);
    this.getMaximusE = this.getMaximusE.bind(this);
  }

  /**
  * Render ministry work experience
  * @returns {JSX} returns React element
  */
  getMinistryE() {
    const intro = (
      <div style={{ textAlign: 'justify' }}>
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
        <li><a href="https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/ministries/social-development-poverty-reduction" style={style}>
          Ministry of Social Development and Poverty Reduction
        </a></li>
        <li><a href="#" style={style} uk-icon="icon: clock; ratio: 0.6" uk-tooltip="201806 - 201812, 201905 - Present"></a></li>
      </React.Fragment>
    );

    return (
      <CommentContainer
        commentBody={intro}
        commentMeta={metaList}
        commentTitle="Front End/Web Application Developer"
        commentImage={<img className="uk-comment-avatar" src="img/bcministry.png" width="100" height="100" alt="" />}
      />
    );
  }

  /**
  * Render bctransit work experience
  * @returns {JSX} returns React element
  */
  getTransitE() {
    const intro = (
      <div style={{ textAlign: 'justify' }}>
        <p>- Build data model using SQL queries and design report using BI Publisher and crystal report</p>
        <p>- Debug dynamic actions for application using Oracle Application Express</p>
        <p>- Install and update the new patches of Raspberry Pi</p>
        <p>- Handel application related tickets assigned by service desk</p>
        <p>- Attend Agile and DevOps training with QAcademy</p>      
      </div>
    );

    const style = {
      color: "#89918C", 
      fontFamily: "'Times New Roman', Times, serif",
      fontSize: "0.95em",
    };

    const metaList = (
      <React.Fragment>
        <li><a href="https://www.bctransit.com/choose-transit-system" style={style}>BC Transit</a></li>
        <li><a href="#" style={style} uk-icon="icon: clock; ratio: 0.6" uk-tooltip="201801 - 201804"></a></li>
      </React.Fragment>
    );

    return (
      <CommentContainer
        commentBody={intro}
        commentMeta={metaList}
        commentTitle="IT - Applicant"
        commentImage={<img className="uk-comment-avatar" src="img/bctransit.png" width="100" height="100" alt="" />}
      />
    );
  }

  /**
  * Render maximus work experience
  * @returns {JSX} returns React element
  */
  getMaximusE() {
    const intro = (
      <div style={{ textAlign: 'justify' }}>
        <p>- Participate in functional testing, smoke testing, regression testing, joint system integration testing and business acceptance testing</p>
        <p>- Create and manipulate test data using SQL Developer; Create and execute test cases using SilkCentral, and analyze test result on a regular basis; Create and follow the change requests using Starteam</p>
        <p>- Track information and work through SharePoint</p>
        <p>- Work collaboratively on a cross-functional team and contribute to project planning and implementation</p> 
      </div>
    );

    const style = {
      color: "#89918C", 
      fontFamily: "'Times New Roman', Times, serif",
      fontSize: "0.95em",
    };

    const metaList = (
      <React.Fragment>
        <li><a href="https://maximuscanada.ca" style={style}>Maximus</a></li>
        <li><a href="#" style={style} uk-icon="icon: clock; ratio: 0.6" uk-tooltip="201701 - 201712"></a></li>
      </React.Fragment>
    );

    return (
      <CommentContainer
        commentBody={intro}
        commentMeta={metaList}
        commentTitle="Business System Analysis"
        commentImage={<img className="uk-comment-avatar" src="img/maximus.png" width="100" height="100" alt="" />}
      />
    );
  }



  /**
  * Renders a website component
  * @returns {JSX} returns React element
  */
  render() {
    const ministry = this.getMinistryE();
    const bctransit = this.getTransitE();
    const maximus = this.getMaximusE();

    return (
      <div id="two" className="work">
        <SectionContainer>
          <div uk-slider="center: true">
            <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1">
              <ul className="uk-slider-items uk-child-width-1-2@s uk-grid">
                <li className="uk-width-3-4">
                  <CardContainer>{ministry}</CardContainer>
                </li>
                <li className="uk-width-3-4">
                  <CardContainer>{bctransit}</CardContainer>
                </li>
                <li className="uk-width-3-4">
                  <CardContainer>{maximus}</CardContainer>
                </li>
              </ul>
              {/* <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
              <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a> */}
            </div>
            <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
          </div>
        </SectionContainer>
      </div>

    );
  }
}
export default WorkPage;