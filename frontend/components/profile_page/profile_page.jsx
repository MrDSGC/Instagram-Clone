import React from 'react';
// import ProfileDetailsContainer from './profile_details_container';
import PhotoIndexContainer from './photo_index_container';

// <ProfileDetailsContainer/>
const profilePage = () => (
  <div className="profile-page">
    <div className="profile-details">
    </div>
    <div className='profile-photos'>
      <PhotoIndexContainer/>
    </div>
  </div>
)

export default profilePage;
