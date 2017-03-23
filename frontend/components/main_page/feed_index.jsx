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

  render () {
    return (
      <div className="main-feed">
        <ul className="feed-index">
          {this.props.photos.map((photo, idx) => {
            return(
              <li className="feed-photo" key={idx}>
                <Photo
                  currentUser={this.props.currentUser}
                  currentPhoto={photo}
                  photoId={photo.id}
                  feed={true}
                  addLike={this.props.addLike}
                  removeLike={this.props.removeLike}
                  updatePhoto={this.props.updatePhoto}
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
