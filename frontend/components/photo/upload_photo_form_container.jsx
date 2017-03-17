class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { img_url: "", caption: "", location: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}


	handleSubmit(e) {
		e.preventDefault();
		const photo = this.state;
		this.props.uploadPhoto(photo);
	}

	render() {
		return (
			<div className="photo-upload-modal">
				<div className="photo-upload-form">
					<form onSubmit={this.handleSubmit} >
						<div className="photo-upload-inputs">
							<input type="text"
								className="inputs"
								value={this.state.username}
								placeholder="Write a Caption!"
								onChange={this.update("location")}/>
              <input type="text"
								className="inputs"
								value={this.state.location}
								placeholder="Where did you take this photo?"
								onChange={this.update("location")}/>
              <input type="submit" value="Submit" className="photo-upload-submit" />
						</div>
					</form>
			</div>
		);
	}

}

export default withRouter(SessionForm);
