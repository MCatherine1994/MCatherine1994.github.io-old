import PropTypes from 'prop-types';
import React, { Component } from 'react';

import "../../node_modules/uikit/src/less/uikit.theme.less";

/**
* A CommentContainer component
*/
class CommentContainer extends Component {
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
    const { commentBody, commentMeta, commentTitle, commentImage } = this.props;
    return (
      <article className="uk-comment uk-align-center">
        <header className="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid="">
          {commentImage}
          <div className="uk-width-expand uk-comment-intro">
            <p className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="#">{commentTitle}</a></p>
            <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
              {commentMeta}
            </ul>
          </div>
        </header>
        <hr />
        <div className="uk-comment-body uk-align-center">
          {commentBody}
        </div>
      </article>
    );
  }
}

CommentContainer.defaultProps = {
  commentBody: null,
  commentMeta: null,
  commentTitle: null,
  commentImage: null,
};

CommentContainer.propTypes = {
  commentBody: PropTypes.shape(),
  commentMeta: PropTypes.shape(),
  commentTitle: PropTypes.shape(),
  commentImage: PropTypes.shape(),
};

export default CommentContainer;