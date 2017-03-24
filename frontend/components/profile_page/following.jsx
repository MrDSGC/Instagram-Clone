import React from 'react';
import { Link } from 'react-router';




const Followers = (props) => {
  return (
    <div >
      <h1 className="follow-header"> Following </h1>
      <ul className="follow-list">
        {props.following.map(followee => {
          return (
            <li key={followee.id} className="follow">
              <img
                 className="following-profile-photo" src={followee.profile_pic_url}/>
              <Link
                className="following-profile-username" to={`/${followee.username}`}>{followee.username}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
};

export default Followers;
