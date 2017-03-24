import React from 'react'
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { hashHistory } from 'react-router';
import AlertContainer from 'react-alert'

const CLOUDINARY_UPLOAD_PRESET = 'c1gtklzr';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/mrdsgc/upload';


class UploadPhotoForm extends React.Component {
	constructor(props) {
		super(props);

		this.alertOptions = {
      offset: 14,
      position: 'bottom left',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    };

		this.state = {
      img_url: "",
      caption: "",
      location: "",
      uploadedFileCloudinaryUrl: ''
     };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.updateIndex = this.updateIndex.bind(this);
	}

	showAlert(){
    msg.show('Login required to upload photos! Redirecting to Login page...', {
      time: 2000,
      type: 'success'
    });
	}

  componentDidMount () {
    if(!this.props.currentUser) {
			this.showAlert()
      setTimeout(() => hashHistory.push("/login"), 5000)
    }
  }

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url,
          img_url: response.body.secure_url
        });
      }
    });
  }

	updateIndex(uploaded) {
		let newPhotos = this.props.photos.push(uploaded)
		this.setState({ photos: newPhotos})
	}

	handleSubmit(e) {
		e.preventDefault();
		const photo = {
      img_url: this.state.img_url,
      caption: this.state.caption,
      location: this.state.location}
		this.props.uploadPhoto(photo)
			.then(hashHistory.push(`/${this.props.currentUser.username}`))
      .then(this.props.onModalClose())
	}

	render() {
		return (
			<div className="photo-upload-modal">
				<h1 className="upload-header">Photo Upload</h1>
				<div className="photo-upload-form">
					<form className="upload-form" onSubmit={this.handleSubmit} >
						<div className="photo-upload-inputs">
              <div className="cloud-upload">
                <Dropzone
                  className="dropzone"
                  multiple={false}
                  accept="image/*"
                  onDrop={this.onImageDrop.bind(this)}>
                  <p className="dropzone-instructions">Drop an image or click to select a file to upload.</p>
                </Dropzone>
                <div>
                  {this.state.uploadedFileCloudinaryUrl === '' ? null :
                    <div>
                      <p className="preview-label">{this.state.uploadedFile.name}:</p>
                      <img className='photo-upload-preview' src={this.state.uploadedFileCloudinaryUrl} />
                    </div>}
                  </div>
              </div>
              <div className="upload-description">
                <input type="text"
                  className="upload-inputs"
                  value={this.state.location}
                  placeholder="Where did you take this photo?"
                  onChange={this.update("location")}/>
                <textarea
                  className="upload-inputs-text"
                  value={this.state.caption}
                  placeholder="Write a Caption!"
                  onChange={this.update("caption")}/>
                <input type="submit" value="Submit" className="photo-upload-submit" />
              </div>
						</div>
					</form>
        </div>
				<AlertContainer ref={(a) => global.msg = a} {...this.alertOptions} />
			</div>
		);
	}

}

export default UploadPhotoForm;
