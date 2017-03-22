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
    if(this.props.feed) {
      this.props.fetchComments();
    } else {
      this.props.fetchComments(this.props.photo_id);
    }
  };

  deleteOutput (author_id, comment_id) {
    if (this.props.currentUser.id === author_id) {
      return (
        <button className="remove-comment-button" onClick={ this.removeComment(comment_id) }>X</button>
      )
    }
  }

  commentFormOutput () {
    if (!this.props.currentUser) {
      return (
        <div>
          <Link to="login">Log in</Link> or <Link to="signup">sign up</Link> to comment...
        </div>
      )
    } else {
      return (
        <CommentFormContainer photoId={this.props.photo_id} feed={this.props.feed} />
      )
    }
  }

  belongsToPhoto (comment) {
    return comment.photo_id === this.props.photo_id;
  }

  compnentOutput () {
    if (this.props.feed) {
      const currentPhotoComments = this.props.comments.filter(this.belongsToPhoto) || []
      return(
        <div className="feed-comment-section">
          <ul className="feed-comment-index">
            {currentPhotoComments.map(comment => {
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
          <div className="feed-comment-form">
            <div  >
              <LikeButtonContainer feed={this.props.feed}/>
            </div>
            {this.commentFormOutput()}
          </div>
        </div>
      )
    } else {
      return (
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
            {this.commentFormOutput()}
          </div>
        </div>
      )
    }
  }


  render() {
    return(
      <div>
        {this.compnentOutput()}
      </div>
    )
  }
}


export default CommentIndex;
