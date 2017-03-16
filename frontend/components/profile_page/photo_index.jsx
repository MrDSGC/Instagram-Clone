import React from 'react';
import { Link, withRouter } from 'react-router';
import FontAwesome from 'react-fontawesome'
import Modal from "react-modal"
import PhotoContainer from '../photo/photo_container'
import {style} from './modal_style'

class PhotoIndex extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      modalOpen: false,
    }
    this.handleClick = this.handleClick.bind(this)
    this.onModalClose = this.onModalClose.bind(this)
	}

  componentDidMount() {
    this.props.fetchPhotos(this.props.username);
  }

  handleClick() {
    this.setState({ modalOpen: true})
  }

  onModalClose () {
    this.setState({ modalOpen:false })
  }

  render() {
    return(
      <div>
        <ul className="profile-photo-index">
          { this.props.photos.map((photo)=> {
            return(
              <li key={photo.id} className="profile-photo-index-item">
                <div className="hover-graphic" onClick={ this.handleClick() }>
                  <div className="likes">
                    <i class="fa fa-heart" aria-hidden="true"></i>
                    {photo.like_count}
                  </div>
                  <div className="comments">
                    <i class="fa fa-comment" aria-hidden="true"></i>
                    {photo.like_comment}
                  </div>

                </div>
                <img className='profile-index-img'src={photo.img_url}/>
              </li>
            )
          })}
        </ul>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={style} >
          <PhotoContainer/>
          <button onClick={this.onModalClose}>X</button>
        </Modal>
      </div>
    )
  }

}

export default PhotoIndex;
