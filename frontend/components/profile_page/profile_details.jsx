import React from 'react';
import { hashHistory } from 'react-router';

class ProfileDetails extends React.Component {
  constructor(props) {
    super(props)
  }

  // profileButtonOutput () {
  //   if () {
  //     return {
  //       <button value="Edit Profile"/>
  //     }
  //   } else if () {
  //     return {
  //       <button value="Follow"/>
  //     }
  //   } else {
  //     return {
  //       <button value="unFollow"/>
  //     }
  //   }
  // }

  componentDidMount () {
    this.props.fetchUser(this.props.username);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.username != nextProps.username) {
      this.props.fetchUser(nextProps.username);
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

          </div>
          <div className="profile-info-2nd">
            <div className="post-count">
              {this.props.photos.length} posts
            </div>
            <div className="follower-count">
              10 Followers
            </div>
            <div className="following-count">
              10 Following
            </div>
          </div>
          <div className="profile-info-biography">
            Bio: {this.props.user.biography}
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileDetails;
