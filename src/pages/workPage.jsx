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
    return (
      <div id="two" className="work">
        <div className="section-container uk-card uk-card-default uk-card-body uk-align-center">
          <div uk-slider="center: true">
            <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1">
              <ul className="uk-slider-items uk-child-width-1-2@s uk-grid">
                <li className="uk-width-3-4">
                  <div className="uk-panel uk-card uk-card-default">
                    <img className="" src="img/bcministry.png" width="110" height="110" alt=""/>
                  </div>
                </li>
                <li className="uk-width-3-4">
                  <div className="uk-panel uk-card uk-card-default">
                    <img className="" src="img/bctransit.png" width="110" height="110" alt=""/>
                  </div>
                </li>
                <li className="uk-width-3-4">
                  <div className="uk-panel uk-card uk-card-default">
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