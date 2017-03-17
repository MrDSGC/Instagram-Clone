import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import Modal from "react-modal";
import UploadPhotoFormContainer from '../photo/upload_photo_form_container';

class NavBar extends React.Component {
	constructor(props) {
		super(props);
    this.onModalClose = this.onModalClose.bind(this)
    this.state = {
      modalOpen: false,
    }
  }

  onModalClose () {
    this.setState({ modalOpen:false })
  }

  modalOpen() {
    return () =>{
      this.setState({ modalOpen: true })
    }
  }

  render () {
    return (
      <div className="nav-bar">
        <div className="logo">
					<img className="nav-logo" src="http://res.cloudinary.com/mrdsgc/image/upload/v1489783791/festisite_instagram_s8d3bq.png"/>
        </div>
        <div className="SearchBar"></div>
        <ul className="nav-buttons">
          <li className="profile-nav">P</li>
          <li onClick={this.modalOpen()}className="upload-nav">UP</li>
        </ul>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          className="upload-modal"
          overlayClassName="upload-modal-overlay"
          contentLabel="">
          <UploadPhotoFormContainer onModalClose={this.onModalClose}/>
          <button className="modal-exit" onClick={this.onModalClose}>X</button>
        </Modal>
      </div>
    );
  };
};

export default NavBar
