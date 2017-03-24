import React from 'react';
import { Link } from 'react-router';


const Followers = (props) => {
  return (
    <div >
      <h1 className="follow-header"> Followers </h1>
      <ul className="follow-list">
        {props.followers.map(follower => {
          return (
            <li key={follower.id} className="follow">
              <img
                 className="following-profile-photo" src={follower.profile_pic_url}/>
              <Link
                className="following-profile-username" to={`/${follower.username}`}>{follower.username}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
};

export default Followers;
