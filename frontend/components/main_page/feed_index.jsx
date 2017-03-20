import React from 'react';
import PhotoContainer from '../photo/photo_container';


class FeedIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchPhotos(this.props.username);
  }

  render () {
    return (
      <div className="main-feed">
        <ul className="feed-index">
          {this.props.photos.map((photo) => {
            <PhotoContainer photoId={photo.id} />
          })}
        </ul>
      </div>
    )
  }
};


export default FeedIndex;
