import React from 'react';

class LikeButton extends React.Component {

	constructor(props) {
		super(props);
    this.handleLike = this.handleLike.bind(this);
	}


	handleLike(e) {
    e.preventDefault();
    if(this.state.liked){
        this.props.removeLike({
          liker_id: this.props.currentUser.id,
          photo_id: this.props.currentPhoto.id
        })
    } else {
      this.props.addLike({
        liker_id: this.props.currentUser.id,
        photo_id: this.props.currentPhoto.id
      })
    }
  }

	heartOutput () {
		if(this.props.currentPhoto.current_user_liked) {
			return (
				"like-heart-red"
			)
		} else {
			return( "like-heart")
		}
	}


  render () {
    return (
      <div className={this.heartOutput()} onClick={this.handleLike}>
        <i className="fa fa-heart" aria-hidden="true"></i>
      </div>
    )
  }
}

export default LikeButton
