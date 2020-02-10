import React, { Component } from 'react';

import SectionContainer from '../components/sectionContainer';
import CommentContainer from '../components/commentContainer';
import CardContainer from '../components/cardContainer';

import "../../node_modules/uikit/src/less/uikit.theme.less";

/**
* A HomePage component
*/
class HomePage extends Component {
  /**
  * Renders a website component
  * @returns {JSX} returns React element
  */
  render() {
    const introduction = (
      <CardContainer>
        <p>Programming Language: JAVA, C, Python, HTML/CSS/Javascript, React.js, D3.js, SQL</p>
        <p>Database: Oracle, PostgreSQL, MongoDB</p>
        <p>Project Management: Git, GitLab, Azure DevOps</p>
        <p>Environment: Windows, Linux</p>
        <p>Statistic: Matlab, R/RStudio</p>
      </CardContainer>
    );

    const icons = (
      <React.Fragment>
        <li><a href="https://github.com/MCatherine1994" uk-icon="github"></a></li>
        <li><a href="https://www.linkedin.com/in/da-catherine-meng-568800146/" uk-icon="linkedin"></a></li>
        <li><a href="#" uk-icon="mail" uk-tooltip="dmeng@uvic.ca"></a></li>
      </React.Fragment>
    );

    return (
      <div id="one" className="home">
        <SectionContainer>
          <CommentContainer
            commentBody={introduction}
            commentMeta={icons}
            commentTitle="Computer Science Student with Statistic Minor from Univerity of Victoria"
            commentImage={<img className="uk-comment-avatar" src="img/selfi.png" width="110" height="110" alt=""/>}
          />
        </SectionContainer>
      </div>
    );
  }
}
export default HomePage;