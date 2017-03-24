import React from 'react';
import Photo from '../photo/photo';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchFeed(this.props.currentUser.username);
    this.props.fetchComments();
  }

  notFollowing () {
    if(this.props.currentUser !== null) {
      if ( this.props.currentUser.following.length === 0) {
        return (
          "You are not following anyone! Here are a few random posts..."
        )
      }
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.photos.length !== nextProps.photos.length) {
			this.props.fetchFeed(nextProps.currentUser.username);
		}
  }

  sortedPhotos () {
    return (this.props.photos.sort((a, b) => {
      return a.raw_age - b.raw_age
    }))
  }
  render () {
    return (
      <div className="main-feed">
        <div className="not-following">
          {this.notFollowing()}
        </div>
        <ul className="feed-index">
          {this.sortedPhotos().map((photo, idx) => {
            return(
              <li className="feed-photo" key={idx}>
                <Photo
                  currentUser={this.props.currentUser}
                  currentPhoto={photo}
                  photoId={photo.id}
                  feed={true}
                  addLike={this.props.addLike}
                  destroyLike={this.props.destroyLike}
                  />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
};


export default FeedIndex;
