
import React from 'react';

class CommentForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      body: "",
      photo_id: this.props.photoId,
      comment_author_id: this.props.currentUser.id
    };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.update = this.update.bind(this);
	}

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = this.state;
		comment.photo_id = this.props.photoId
    this.props.createComment(comment);
  	this.setState({body: ""})
	}

  render() {
    return (
      <div className="comment-form-component">
        <form className="comment-form" onSubmit={ this.handleSubmit }>
          <input
						className="comment-input"
            id="comment"
            type="text"
						value={this.state.body}
            placeholder="Add a comment..."
            onChange={this.update("body")} />
        </form>
      </div>
    )
  }

}

export default CommentForm;
