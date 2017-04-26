import React from 'react';
import Photo from '../photo/photo';
import MessageContainer from './message_container'
import { Link } from 'react-router';


class FeedIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchFeed(this.props.currentUser.username);
    this.props.fetchComments();
  }

  componentWillMount () {
    this.props.fetchUsers();
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

  suggestions () {
    return (
      <ul className="suggestions">
        {this.props.suggestions.map((user, idx) => {
          return (
            <li className="suggestion" key= {idx}>
              <img
                 className="suggestion-profile-photo" src={user.profile_pic_url}/>
              <Link
                className="suggestion-username" to={`/${user.username}`}>{user.username}
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }
  render () {
    return (
      <div className="main-feed">
        <div className="not-following">
          <MessageContainer />
        </div>
        <div className="suggestion-list">
            <h1 className="suggestion-header"> Suggested Users: </h1>
            {this.suggestions()}
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
