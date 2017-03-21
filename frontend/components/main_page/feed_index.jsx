import React from 'react';
import Photo from '../photo/photo';


class FeedIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchFeed(this.props.username);
  }

  // <Photo
  //   currentPhoto={photo}
  //   photoId={photo.id}
  //   feed={true}/>
  render () {
    return (
      <div className="main-feed">
        <ul className="feed-index">
          {this.props.photos.map((photo, idx) => {
            return(
              <li key={idx}>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
};


export default FeedIndex;
