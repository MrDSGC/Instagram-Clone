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
