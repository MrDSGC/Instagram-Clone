import React from 'react';
import { Link, withRouter } from 'react-router';

class EditFormed extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      id: this.props.currentUser.id,
      username: this.props.currentUser.username,
      biography: this.props.currentUser.biography };
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
		const user = this.state;
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
		this.props.clearErrors();
	}

	render() {
		return (
			<div className="user-edit-component">
				<form className="edit-form" onSubmit={this.handleSubmit} >
					<div className="edit-inputs">
						<input type="text"
							className="inputs"
							value={this.state.username}
							placeholder="Username"
							onChange={this.update("username")}/>
            <textarea type="text"
							className="bio-inputs"
							value={this.state.biography}
							placeholder="Biography"
							onChange={this.update("biography")}/>
						<input type="submit" value="Submit" className="splash-button"/>
					</div>
				</form>
				<div >
					{this.renderErrors()}
				</div>
			</div>
		);
	}

}

export default withRouter(EditFormed);
