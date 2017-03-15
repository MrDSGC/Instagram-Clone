import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleGuestLogin = this.handleGuestLogin.bind(this);
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}


	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.login(user);
	}

	handleGuestLogin(e) {
		const guest = {username: "guest", password: "guestpassword"};
		this.props.login(guest)

	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}


	render() {
		return (
			<div className="login-component">
				<div className="login-form">
					<form onSubmit={this.handleSubmit} >
						<h1>InstaClone</h1>
						<div className="login-inputs">
							<input type="text"
								value={this.state.username}
								placeholder="Username"
								onChange={this.update("username")}/>
							<input type="password"
								value={this.state.password}
								placeholder="Password"
								onChange={this.update("password")}/>
							<input type="submit" value="Submit" />
						</div>
					</form>
					<div>OR</div>
					<button onClick={this.handleGuestLogin}>Guest Login</button>
					{this.renderErrors()}
				</div>
        <div className = "to-signup">
          Don't have an acount?
					<br/>
          <Link to="signup">Sign up</Link>
        </div>
			</div>
		);
	}

}

export default withRouter(SessionForm);
