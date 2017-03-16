import React from 'react';
import { Link, withRouter } from 'react-router';

class Photo extends React.Component {
  constructor(props) {
    super(props)
  }


  render () {
    let {currentPhoto} = this.props
    return(
      <div className="profile-photo">
        <img className="photo" src={currentPhoto.img_url}/>
        <div className="photo-stuff">
          <div className="poster-info">
            <img src={currentPhoto.poster.profile_pic_url}/>
            <Link to={`/${currentPhoto.poster.username}`}/>
            <button onClick={}>X</button>
            <div>{currentPhoto.location}</div>
          </div>
          <div className="photo-info">
            <div>{currentPhoto.likers.length}</div>
            <div>{currentPhoto.age}</div>
          </div>
          <div className="COMMENTSCONTAINER">

          </div>
        </div>
      </div>
    )
  };
}

export default Photo;
