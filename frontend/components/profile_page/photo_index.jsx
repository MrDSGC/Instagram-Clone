import React from 'react';
import { Link, withRouter } from 'react-router';

class PhotoIndex extends React.Component {
	constructor(props) {
		super(props);
	}


  render() {
    <ul>
      { this.props.photos.map((photo)=> {
        return{
          <li>
            <div className="hover-graphic">
              <div className="likes">
                {photo.like_count}
              </div>
              <div className="comments">
                {photo.like_comment}
              </div>

            </div>
            <img src={photo.img_url}/>
          </li>
        }
      })}
    </ul>
  }

}

export default PhotoIndex;
