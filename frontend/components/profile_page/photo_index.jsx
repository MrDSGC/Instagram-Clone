import React from 'react';
import { Link, withRouter } from 'react-router';
import FontAwesome from 'react-fontawesome'
import Modal from "react-modal"
import PhotoContainer from '../photo/photo_container'

class PhotoIndex extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      modalOpen: false,
      photoId: null
    }
    this.handleClick = this.handleClick.bind(this)
    this.onModalClose = this.onModalClose.bind(this)
	}

  componentDidMount() {
    this.props.fetchPhotos(this.props.username);
  }

  handleClick(id) {
    return () =>{
      this.setState({ modalOpen: true, photoId: id})
    }
  }

  onModalClose () {
    this.setState({ modalOpen:false, photoId: null })
  }

	componentWillReceiveProps (nextProps) {
		if (this.props.photos.length !== nextProps.photos.length) {
			this.props.fetchPhotos(this.props.username);
		}

		if (this.props.username != nextProps.username) {
			this.props.fetchPhotos(nextProps.username);
		}
	}

  render() {
    return(
      <div>
        <ul className="profile-photo-index">
          { this.props.photos.map((photo)=> {
						const backgroundPhoto = {
							backgroundImage: `url('${photo.img_url}')`
						}
            return(
              <li key={photo.id} className="profile-photo-index-item">
                <div className="hover-graphic" onClick={ this.handleClick(photo.id) }>
									<div className="index-info">
										<div className="likes">
											<i className="fa fa-heart" aria-hidden="true"></i>
											<div className="photo-index-count">
												{photo.likes}
											</div>
										</div>
										<div className="comments">
											<i className="fa fa-comment" aria-hidden="true"></i>
											<div className="photo-index-count">
												{photo.comments}
											</div>
										</div>
									</div>

                </div>
                <div className='profile-index-img'style={backgroundPhoto}></div>
              </li>
            )
          })}
        </ul>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          className="profile-modal"
          overlayClassName="profile-modal-overlay"
          contentLabel="">
          <PhotoContainer photoId={this.state.photoId} feed={false}/>
          <button className="modal-exit" onClick={this.onModalClose}>X</button>
        </Modal>
      </div>
    )
  }

}

export default PhotoIndex;
