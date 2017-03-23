import React from 'react';
import ProfileDetailsContainer from './profile_details_container';
import PhotoIndexContainer from './photo_index_container';


class ProfilePage extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return(
      <div className="profile-page">
        <div className="profile-details">
          <ProfileDetailsContainer username={this.props.username} />
        </div>
        <div className='profile-photos'>
          <PhotoIndexContainer username={this.props.username}/>
        </div>
      </div>
    )
  }

}


export default ProfilePage;
