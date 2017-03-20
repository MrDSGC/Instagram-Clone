import React from 'react';
import { Link, withRouter } from 'react-router';
import CommentFormContainer from './comment_form_container'

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.removeComment = this.removeComment.bind(this)
  };

  removeComment(comment_id) {
    return (e) => {
      e.preventDefault();
      this.props.destroyComment(this.props.photo_id, comment_id)
    };
  };

  componentDidMount() {
    this.props.fetchComments(this.props.photo_id);
  };

  render() {
    return(
      <div className="photo-comment-section">
        <ul className="photo-comment-index">
          {this.props.comments.map(comment => {
            return(
              <li key={comment.id} className="photo-comment">
                <Link className="profile-username" to={`/${comment.comment_author_id.username}`}>{comment.comment_author_id.username}</Link>
                <p className="comment-body">
                  {comment.body}
                </p>
                <button className="remove-comment-button" onClick={ this.removeComment(comment.id) }>X</button>
              </li>
            )
          })}
        </ul>
        <div className="photo-comment-form">
          <div className="like-heart" >
            <i className="fa fa-heart" aria-hidden="true"></i>
          </div>
          <CommentFormContainer photoId={this.props.photo_id} />
        </div>
      </div>
    )
  }
}


export default CommentIndex;
