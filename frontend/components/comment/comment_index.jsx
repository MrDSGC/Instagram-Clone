import React from 'react';
import { Link, withRouter } from 'react-router';
import CommentFormContainer from './comment_form_container'
import LikeButtonContainer from './like_button_container'

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

  deleteOutput (author_id, comment_id) {
    if (this.props.currentPhoto.poster === this.props.currentUser || this.props.currentUser.id === author_id) {
      return (
        <button className="remove-comment-button" onClick={ this.removeComment(comment_id) }>X</button>
      )
    }
  }

  render() {
    return(
      <div className="photo-comment-section">
        <ul className="photo-comment-index">
          {this.props.comments.map(comment => {
            return(
              <li key={comment.id} className="photo-comment">
                <Link className="profile-comment-username" to={`/${comment.author.username}`}>{comment.author.username}</Link>
                <p className="comment-body">
                  {comment.body}
                </p>
                {this.deleteOutput(comment.comment_author_id, comment.id)}

              </li>
            )
          })}
        </ul>
        <div className="photo-comment-form">
          <div  >
            <LikeButtonContainer/>
          </div>
          <CommentFormContainer photoId={this.props.photo_id} />
        </div>
      </div>
    )
  }
}


export default CommentIndex;
