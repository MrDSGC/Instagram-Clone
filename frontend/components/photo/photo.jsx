import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import CommentIndexContainer from '../comment/comment_index_container';

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
      onClick={this.toggle("location")}
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
          onClick={this.toggle("caption")}
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

      if(this.props.currentPhoto.current_user_liked){
          this.props.removeLike({
            liker_id: this.props.currentUser.id,
            photo_id: this.props.photoId
          }).then(
            () => {
              if(!this.props.feed) {
                this.props.fetchPhoto(this.props.photoId)
              }}
            )
      } else {
        this.props.addLike({
          liker_id: this.props.currentUser.id,
          photo_id: this.props.photoId
        }).then(
          () => {
            if(!this.props.feed) {
              this.props.fetchPhoto(this.props.photoId)
            }}
          )
      }
    }


  handleProfile(username) {
    return () => hashHistory.push(`/${username}`)
  }

  componentDidMount() {
    if(!this.props.feed) {
    this.props.fetchPhoto(this.props.photoId)
    }
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

  likesOrLike () {
    if(this.props.currentPhoto.likes === 1){
      return (
        "Like"
      )
    } else {
      return(
        "Likes"
      )
    }
  }

  compnentOutput () {
    let {currentPhoto} = this.props

    // call window.outer inner width
    if (this.props.feed) {
      return(
       <div className="inside-feed-index">
         <div className="feed-poster-info">
           <img
             onClick={this.handleProfile(currentPhoto.poster.username)}
             className="profile-photo" src={currentPhoto.poster.profile_pic_url}/>
           <div className="feed-poster-info-username">
             <Link className="feed-profile-username" to={`/${currentPhoto.poster.username}`}>{currentPhoto.poster.username}</Link>
             <div className="feed-location">
               {this.locationOutput()}
             </div>
           </div>
           <div className="feed-photo-age">{currentPhoto.age}</div>
         </div>

         <img className="feed-photo-img" src={currentPhoto.img_url} onDoubleClick={this.handleLike}/>

         <div className="feed-photo-info">
           <div className="feed-like-count"> {this.props.currentPhoto.likes}</div>
           <div>{this.likesOrLike()}</div>
         </div>
         <div className="feed-caption">
           {this.captionOutput()}
         </div>
         <div className="feed-comments-here">
           <CommentIndexContainer currentPhoto={this.props.currentPhoto}
             photoId={this.props.photoId} handleLike={this.props.handleLike}
             feed={this.props.feed}/>
         </div>
       </div>
     )
    } else {
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
             <div className="photo-info-left"> {this.props.currentPhoto.like_count} likes</div>
             <div className="photo-info-right">{currentPhoto.age}</div>
           </div>
           <div className="caption">
             {this.state.captionEdit ? this.captionForm() : this.captionOutput()}
           </div>

           <div className="comments-here">
             <CommentIndexContainer photoId={this.props.photoId} handleLike={this.props.handleLike}/>
           </div>
         </div>
       </div>
     )
    }
  }


  render () {
    return (
      <div>
        {this.compnentOutput()}
      </div>
    )
  }
}

export default Photo;
