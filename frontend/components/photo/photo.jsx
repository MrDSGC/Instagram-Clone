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


    this.state = {
      locationEdit: false,
      captionEdit: false,
      location: this.props.currentPhoto.location,
      caption: this.props.currentPhoto.caption
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
      className="photo-location-output" >{this.state.location}  <i className="fa fa-pencil" aria-hidden="true"></i></div>
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
          {this.state.caption}  <i className="fa fa-pencil" aria-hidden="true"></i>
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

  toggle(field) {
    if((this.props.currentUser !== null) && (this.props.currentPhoto.poster.id === this.props.currentUser.id)) {
      return () => this.setState({[field + "Edit" ]: !this.state[field + "Edit" ]})
    }
  }

  handleSubmit(field) {
    return e => {
      console.log(field);
      e.preventDefault();
      this.props.updatePhoto({[field]: this.state[field], id: this.props.currentPhoto.id})
      .then(this.toggle(field))
    };
  }

  handleProfile(username) {
    return () => hashHistory.push(`/${username}`)
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.photoId)
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
    console.log(this.props);
    let {currentPhoto} = this.props
    return(
      <div className="inside-profile-modal">
        <img className="photo" src={currentPhoto.img_url}/>
        <div className="photo-stuff">
          <div className="poster-info">
            <img
              onClick={this.handleProfile(currentPhoto.poster.username)}
              className="profile-photo" src={currentPhoto.poster.profile_pic_url}/>
            <div className="poster-info-username">
              <Link to={`/${currentPhoto.poster.username}`}>{currentPhoto.poster.username}</Link>
              {this.state.locationEdit ? this.locationForm() : this.locationOutput()}
            </div>
          </div>
          <div className="photo-info">
            <div className="photot-info-left">{currentPhoto.likers.length} likes</div>
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
