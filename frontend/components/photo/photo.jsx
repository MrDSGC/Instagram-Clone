import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class Photo extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.locationForm = this.locationForm.bind(this);
    this.captionForm = this.captionForm.bind(this);
    this.locationOutput = this.locationOutput.bind(this);
    this.captionOutput = this.captionOutput.bind(this);
    this.toggle = this.toggle.bind(this);
    this.editOutput = this.editOutput.bind(this);
    this.handleLike = this.handleLike.bind(this);


    this.state = {
      locationEdit: false,
      captionEdit: false,
      location: this.props.currentPhoto.location,
      caption: this.props.currentPhoto.caption,
      liked: this.props.liked,
      currentUser: this.props.curentUser
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  locationOutput () {
    return (<div
      onDoubleClick={this.toggle("location")}
      className="photo-location-output" >{this.state.location} {this.editOutput()}
      </div>
    )
  }



  locationForm() {
    return(
      <form onSubmit={this.handleSubmit("location")} >
        <textarea
          type='text'
          className="photo-location"
          value={this.state.location} onChange={this.update("location")}/>
        <input className="location-submit" type="submit" value="Update Location"/>
      </form>
    );
  };

  captionOutput() {
    return (
      <div >
        <Link
          className="caption-wrap"
          to={`/${this.props.currentPhoto.poster.username}`}>{this.props.currentPhoto.poster.username}</Link>
        <div
          onDoubleClick={this.toggle("caption")}
          className="photo-caption-output">
          {this.state.caption}  {this.editOutput()}
        </div>
      </div>
    );
  };

  captionForm () {
    return(
      <div>
        <Link to={`/${this.props.currentPhoto.poster.username}`}>{this.props.currentPhoto.poster.username}</Link>
        <form
          onSubmit={this.handleSubmit("caption")} >
          <textarea
            className="photo-caption"
            onChange={this.update("caption")}
            value={this.state.caption} />
          <input className="caption-submit" type="submit" value="Update Caption"/>
        </form>
      </div>
      )
  };

  toggle_like() {
    return() => this.setState({ liked: !this.state[liked]})
  }

  toggle(field) {
    if((this.props.currentUser !== null) && (this.props.currentPhoto.poster.id === this.props.currentUser.id)) {
      return () => this.setState({[field + "Edit" ]: !this.state[field + "Edit" ]})
    }
  }

  handleSubmit(field) {
    return e => {
      e.preventDefault();
      this.props.updatePhoto({[field]: this.state[field], id: this.props.currentPhoto.id})
      .then(this.toggle(field))
    };
  }

  handleLike(e) {
      e.preventDefault();
      if(this.state.liked){
          this.props.removeLike({
            liker_id: this.props.currentUser.id,
            photo_id: this.props.photoId
          })
      } else {
        this.props.addLike({
        liker_id: this.props.currentUser.id,
        photo_id: this.props.photoId})
      }
      this.toggle_like();
  }

  likeCount () {
    if(this.state.liked) {
      return ( this.props.currentPhoto.like_count_minus_one)
    } else {
      return ( this.props.currentPhoto.like_count_minus_one + 1)
    }
  }

  handleProfile(username) {
    return () => hashHistory.push(`/${username}`)
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.photoId)
  }

  editOutput() {
    if((this.props.currentUser !== null) && (this.props.currentPhoto.poster.id === this.props.currentUser.id)) {
      return (<i className="fa fa-pencil" aria-hidden="true"></i>)
    }
  }

  componentWillReceiveProps (nextProps) {
    if(this.props.currentPhoto.id !== nextProps.currentPhoto.id) {
      this.setState({
        location: nextProps.currentPhoto.location,
        caption: nextProps.currentPhoto.caption
      })
    }
  }

  render () {
    let {currentPhoto} = this.props
     return(
      <div className="inside-profile-modal">
        <img className="photo" src={currentPhoto.img_url} onDoubleClick={this.handleLike}/>
        <div className="photo-stuff">
          <div className="poster-info">
            <img
              onClick={this.handleProfile(currentPhoto.poster.username)}
              className="profile-photo" src={currentPhoto.poster.profile_pic_url}/>
            <div className="poster-info-username">
              <Link className="profile-username" to={`/${currentPhoto.poster.username}`}>{currentPhoto.poster.username}</Link>
              {this.state.locationEdit ? this.locationForm() : this.locationOutput()}
            </div>
          </div>
          <div className="photo-info">
            <div className="photo-info-left"> {this.likeCount()} likes</div>
            <div className="photo-info-right">{currentPhoto.age}</div>
          </div>
          <div className="caption">
            {this.state.captionEdit ? this.captionForm() : this.captionOutput()}
          </div>

          <div className="comments-here">

          </div>
        </div>
      </div>
    )
  };
}

export default Photo;
