import React from 'react';
import FeedPhotoContainer from '../photo/feed_photo_container'

class FeedIndex extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    return (
      <div className="main-feed">
        <ul className="feed-index">
        </ul>
      </div>
    )
  }
};


export default FeedIndex;
