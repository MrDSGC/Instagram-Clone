import React from 'react';
import LazyLoad from 'react-lazy-load';
import Photo from '../photo/photo';
import MessageContainer from './message_container'
import { Link, hashHistory } from 'react-router';



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

  handleProfile(username) {
    return () => hashHistory.push(`/${username}`)
  }

  sortedPhotos () {
    return (this.props.photos.sort((a, b) => {
      return a.raw_age - b.raw_age
    }))
  }

  suggestion () {
    return (
      <div className="suggested">
        <div className="suggested-title">
          User Spotlight
        </div>

        <ul className="suggested-list">
          {this.props.suggestions.map((user, idx) => {
            return (
              <li className="suggestion" key= {idx} onClick={this.handleProfile(user.username)}>
                <div className="suggested-pic">
                  <img className="suggestion-profile-photo"
                       src={user.profile_pic_url}/>

                </div>

                <div className="suggested-username">
                  <Link
                    className="suggestion-username" to={`/${user.username}`}>{user.username}
                  </Link>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
  render () {
    return (
      <div className="main-feed">
        <div className="not-following">
          <MessageContainer />
        </div>
        <div className="suggestion-list">
            {this.suggestion()}
        </div>
        <ul className="feed-index">
          {this.sortedPhotos().map((photo, idx) => {
            return(
              <LazyLoad key={idx}>
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
              </LazyLoad>
            )
          })}
        </ul>
      </div>
    )
  }
};


export default FeedIndex;
