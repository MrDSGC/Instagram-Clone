import React from 'react';
import { Link, hashHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';
import Modal from "react-modal";
import UploadPhotoFormContainer from '../photo/upload_photo_form_container';

class NavBar extends React.Component {
	constructor(props) {
		super(props);

    this.onModalClose = this.onModalClose.bind(this)
    this.toProfile = this.toProfile.bind(this)
    this.logoutUser = this.logoutUser.bind(this)

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

	toHomepage(e) {
		e.preventDefault();
		hashHistory.push("/")
	}

	toProfile(e) {
		e.preventDefault();
		hashHistory.push(`/${this.props.currentUser.username}`)
	}

	logoutUser(e) {
		e.preventDefault();
		this.props.logout(this.props.currentUser.id);
	}

  render () {
    return (
      <div className="nav-bar">
        <div className="logo">
					<img className="nav-logo" onClick={this.toHomepage} src="http://res.cloudinary.com/mrdsgc/image/upload/v1489783791/seedfiles/festisite_instagram_s8d3bq.png"/>
        </div>
        <div className="SearchBar"></div>
        <ul className="nav-buttons">
          <li className="profile-nav" onClick={this.toProfile}><i
						className="fa fa-user" aria-hidden="true"></i></li>
          <li onClick={this.modalOpen()}className="upload-nav">
						<i className="fa fa-upload" aria-hidden="true"></i></li>
					<li className="logout-button"
						onClick={this.logoutUser}><i className="fa fa-sign-out" aria-hidden="true"></i></li>
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
