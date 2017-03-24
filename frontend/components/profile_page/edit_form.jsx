import React from 'react';
import { Link, withRouter } from 'react-router';
import Dropzone from 'react-dropzone';
import request from 'superagent';


const CLOUDINARY_UPLOAD_PRESET = 'c1gtklzr';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/mrdsgc/upload';

class EditFormed extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      id: '',
      biography: '',
			profile_pic_url: '',
			uploadedFileCloudinaryUrl: ''
		 };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.update = this.update.bind(this);
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = {
			id: this.state.id,
      biography: this.state.biography,
			profile_pic_url: this.state.profile_pic_url,
		}
		this.props.editUser(user);
	}

	renderErrors() {
		return(
			<ul className="errors-list">
				{this.props.errors.map((error, i) => (
					<li className="errors" key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	componentDidMount() {
		this.setState({
      id: this.props.currentUser.id,
      username: this.props.currentUser.username,
      biography: this.props.currentUser.biography,
			profile_pic_url: this.props.currentUser.profile_pic_url
		 })
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
					profile_pic_url: response.body.secure_url
				});
			}
		});
	}

	render() {
		return (
			<div className="user-edit-component">
				<form className="edit-form" onSubmit={this.handleSubmit} >
					<h1 className="edit-header">
						<div className="edit-cloud-upload">
							<Dropzone
								className="edit-dropzone"
								multiple={false}
								accept="image/*"
								onDrop={this.onImageDrop.bind(this)}>
								<img className="edit-profile-pic" src={this.state.profile_pic_url}></img>
							</Dropzone>
						</div>
						<div className="edit-header-username">
							{this.state.username}
						</div>
					</h1>
					<div className="edit-inputs">
						<div className="edit-inputs-row">
							<div>
								Biography :
							</div>
							<textarea type="text"
								className="bio-inputs"
								value={this.state.biography}
								onChange={this.update("biography")}/>
						</div>
						{this.renderErrors}
						<input type="submit" value="Submit" className="edit-button"/>
					</div>
				</form>
				<div >

				</div>
			</div>
		);
	}

}

export default withRouter(EditFormed);
