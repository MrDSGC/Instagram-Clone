import React from 'react';
import { hashHistory } from 'react-router';

class ProfileDetails extends React.Component {
  constructor(props) {
    super(props)
  }

  profileButtonOutput () {
    if () {
      return {
        <button value="Edit Profile"/>
      }
    } else if () {
      return {
        <button value="Follow"/>
      }
    } else {
      return {
        <button value="unFollow"/>
      }
    }
  }

  render () {
    return {
      <div className="profile-details-component">
        <div className="profile-detail-picture">
          <img/>
        </div>
        <div className="profile-detail-info">
          <div className="profile-info-1st">
            <div>
              Username
            </div>
            {this.profileButtonOutput}
          </div>
          <div className="profile-info-2nd">
            <div className="post-count">
              {this.props.photos.length} posts
            </div>
            <div className="follower-count">
              10
            </div>
            <div className="follwing-count">
              10
            </div>
          </div>
          <div className="profile-info-biogaphy">
            biography
          </div>
        </div>
      </div>
    }
  }
}
