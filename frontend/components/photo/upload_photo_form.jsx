import React from 'react'
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { hashHistory } from 'react-router';

const CLOUDINARY_UPLOAD_PRESET = 'c1gtklzr';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/mrdsgc/upload';


class UploadPhotoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      img_url: "",
      caption: "",
      location: "",
      uploadedFileCloudinaryUrl: ''
     };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

  componentDidMount () {
    if(!this.props.currentUser) {
      hashHistory.push("/login")
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


	handleSubmit(e) {
		e.preventDefault();
		const photo = {
      img_url: this.state.img_url,
      caption: this.state.caption,
      location: this.state.location}
		this.props.uploadPhoto(photo)
      .then(hashHistory.push(`/`))
	}

	render() {
		return (
			<div className="photo-upload-modal">
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
                  <h1 className="upload-header">Photo Upload</h1>
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
			</div>
		);
	}

}

export default UploadPhotoForm;
