import React, { Component } from 'react';

import SectionContainer from '../components/sectionContainer';
import CardContainer from '../components/cardContainer';

import "../../node_modules/uikit/src/less/uikit.theme.less";

/**
* A ProjectPage component
*/
class ProjectPage extends Component {
  /**
  * Renders a website component
  * @returns {JSX} returns React element
  */
  render() {
    const pyProject = (
      <dl className="uk-description-list uk-description-list-divider">
        <dt>Battle Snake 2019  <a href="https://github.com/colosnake2019/Fine-snake" uk-icon="icon: github; ratio: 0.8"/>{' '}
          / 2018  <a href="https://github.com/ccSnake2018/ccsnake" uk-icon="icon: github; ratio: 0.8"/></dt>
        <dd>Battle Snake Competition</dd>
        <dt>Find Similar Items</dt>
        <dd>For each question X, find a set of questions Y in the data set such that the similarly is 
          greater than 60%. Dataset from 4k to 290k</dd>
        <dt>PageRank Score</dt>
        <dd>Compute PageRank score for the web dataset provided by Google</dd>
        <dt>Recommended systems</dt>
        <dd>Factorize the utility matrix to build recommended systems</dd>
        <dt>Probabilistic-Simulation  <a href="https://github.com/MCatherine1994/Probabilistic-Simulation" uk-icon="icon: github; ratio: 0.8"/></dt>
        <dd>Simulating a game of Monopoly to experimentally determine the cummulative probability of landing on each square</dd>
        <dt>Search Algorithm  <a href="https://github.com/MCatherine1994/Search-Algorithm" uk-icon="icon: github; ratio: 0.8"/></dt>
        <dd>Algorithm of breadth-first search, depth-first search, iterative-deppening search, greedy best-first search, A* Search</dd>
      </dl>
    );

    // const javaProject = (
    //   <dl className="uk-description-list uk-description-list-divider">
    //     <dt>Maze Problem</dt>
    //     <dd>Use backtrack programming to solve the maze and count the number of solution to the maze</dd>
    //   </dl>
    // );

    const webProject = (
      <dl className="uk-description-list uk-description-list-divider">
        <dt>MCatherine1994.github.io  <a href="https://github.com/MCatherine1994/MCatherine1994.github.io" uk-icon="icon: github; ratio: 0.8"/></dt>
        <dd>Self website built in React.js and published using Github Page</dd>
        <dt>Data Visualization of Canadian Employment Data  <a href="https://github.com/MCatherine1994/dataVisualization" uk-icon="icon: github; ratio: 0.8"/>
        </dt>
        <dd>Group project targets on the datasets of Canadian employment rate, wage rate and tuition fees by industry types from 2008 to 2017</dd>
      </dl>
    );

    return (
      <div id="three" className="project">
        <SectionContainer>
        <div uk-grid="" style={{ paddingBottom: '30px' }}>
          <div className="uk-width-small@s" style={{ width: '28%' }}>
            <ul className="uk-nav uk-nav-default" uk-switcher="connect: #component-nav; animation: uk-animation-fade">
              <li><a className="project-button" href="#">Python</a></li>
              <li><a className="project-button" href="#">Java</a></li>
              <li><a className="project-button" href="#">C</a></li>
              <li><a className="project-button" href="#">HTML/JavaScript/CSS</a></li>
            </ul>
          </div>
          <div className="uk-width-expand">
            <ul id="component-nav" className="uk-switcher">
              <li><CardContainer>{pyProject}</CardContainer></li>
              <li><CardContainer>Working on</CardContainer></li>
              <li><CardContainer>Working on</CardContainer></li>
              <li><CardContainer>{webProject}</CardContainer></li>
            </ul>
          </div>
          </div>
        </SectionContainer>
      </div>
    );
  }
}
export default ProjectPage;