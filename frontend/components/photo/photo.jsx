import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class Photo extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      locationEdit: false,
      captionEdit: false
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  locationOutput() {
    if(this.state.locationEdit) {
      return <div className="photo-location">{currentPhoto.location}</div>
    } else {
      return
        <form onSubmit={this.handleSubmit} className="photo-location">
          <input type='text' value={currentPhoto.location} onChange={this.update()}/>
        </form>
    };
  };

  captionOutput () {
    if(this.state.captionEdit) {
      return <div className="photo-caption">{currentPhoto.caption}</div>
    } else {
      return
        <form onSubmit={this.handleSubmit} className="photo-caption">
          <textarea onChange={this.update()}>{currentPhoto.caption}</textarea>
        </form>
    };
  };

  toggleLocation() {
    this.setState({locationEdit: true})
  }

  toggleCaption() {
    this.setState({captionEdit: true})
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.updatePhoto(currentPhoto);
  }

  handleProfile(username) {
    return () => hashHistory.push(`/${username}`)
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.photoId)
  }

  render () {
    let {currentPhoto} = this.props
    return(
      <div className="inside-profile-modal">
        <img className="photo" src={currentPhoto.img_url}/>
        <div className="photo-stuff">
          <div className="poster-info">
            <img
              onClick={this.handleProfile(currentPhoto.poster.username)}
              className="profile-photo" src={currentPhoto.poster.profile_pic_url}/>
            <Link to={`/${currentPhoto.poster.username}`}>{currentPhoto.poster.username}</Link>
            {this.locationOutput}
          </div>
          <div className="photo-info">
            <div>{currentPhoto.likers.length} likes</div>
            <div>{currentPhoto.age}</div>
          </div>
          <div className="caption">
            {this.captionOutput}
          </div>

          <div className="comments-here">

          </div>
        </div>
      </div>
    )
  };
}

export default Photo;
