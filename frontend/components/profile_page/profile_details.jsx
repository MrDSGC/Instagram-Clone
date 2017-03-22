import React from 'react';
import { hashHistory } from 'react-router';

class ProfileDetails extends React.Component {
  constructor(props) {
    super(props)
    this.followUser = this.followUser.bind(this);
    this.unfollowUser = this.unfollowUser.bind(this);
    this.profileButtonOutput = this.profileButtonOutput.bind(this);
  }

  unfollowUser (e) {
    e.preventDefault();
    this.props.destroyFollow(this.props.user.id);
  }

  followUser(e) {
    e.preventDefault();
    this.props.addFollow({
      follower_id: this.props.currentUser.id,
      followed_id: this.props.user.id
    })
  }

  handleEdit (e) {
    e.preventDefault();
    hashHistory.push("/edit")
  }

  profileButtonOutput () {
    if (!this.props.currentUser) {
      {}
    } else if (this.props.currentUser.id === this.props.user.id) {
      return (
        <button
          className="profile-details-button"
          onClick={this.handleEdit}>Edit Profile</button>
      )
    } else if (this.props.following) {
      return (
        <button
          className="profile-details-button"
          onClick={this.unfollowUser}>Following</button>
      )
    } else {
      return (
        <button
          className="profile-details-button"
          onClick={this.followUser}>Follow</button>
      )
    }
  }

  componentDidMount () {
    this.props.fetchUser(this.props.username)
    .then( action => {
     this.props.isFollowing(action.user.id)
   })

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.username !== nextProps.username) {
      this.props.fetchUser(nextProps.username)
    }

    if (this.props.user.followers.length !== nextProps.user.followers.length) {
      this.props.fetchUser(nextProps.username)
    }
  }

  render () {
    return (
      <div className="profile-details-component">
        <div className="profile-detail-picture">
          <img className="user-profile-picture" src={this.props.user.profile_pic_url}/>
        </div>
        <div className="profile-detail-info">
          <div className="profile-info-1st">
            <div className="user-profile-username">
              {this.props.user.username}
            </div>
            <div className="following-button">
              {this.profileButtonOutput()}
            </div>
          </div>
          <div className="profile-info-2nd">
            <div className="post-count">
              <div className="num">
                {this.props.photos.length}
              </div>
              posts
            </div>
            <div className="follower-count">
              <div className="num">
                {this.props.user.followers.length}
              </div>
            Followers
            </div>
            <div className="following-count">
              <div className="num">
                {this.props.user.following.length}
              </div>
              Following
            </div>
          </div>
          <div className="profile-info-biography">
            <div className="num">
              Bio:
            </div>
            {this.props.user.biography}
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileDetails;
