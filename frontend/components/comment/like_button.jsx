import React from 'react';

class LikeButton extends React.Component {

	constructor(props) {
		super(props);
    this.handleLike = this.handleLike.bind(this)
		this.toggle = this.toggle.bind(this)
		this.state = {
			liked: this.props.currentPhoto.current_user_liked
		}
	}

	toggle() {
		return () => this.setState({["liked"]: !this.state["liked"]})
	}

	handleLike(e) {
    e.preventDefault();
    if(this.state.liked){
        this.props.removeLike({
          liker_id: this.props.currentUser.id,
          photo_id: this.props.currentPhoto.id
        }).then(this.toggle())
    } else {
      this.props.addLike({
        liker_id: this.props.currentUser.id,
        photo_id: this.props.currentPhoto.id
      }).then(this.toggle())
    }
  }

	heartOutput () {
		if(this.state.liked) {
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
