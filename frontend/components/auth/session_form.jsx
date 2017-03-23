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
		const guest = {username: "Guest", password: "asdfasdf"};
		this.props.login(guest)

	}

	componentDidMount() {
		this.props.clearErrors();
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


	render() {
		return (
			<div className="login-component">
				<div className="login-form">
					<form className="auth-form"onSubmit={this.handleSubmit} >
						<img className="logo-header"src="https://res.cloudinary.com/mrdsgc/image/upload/v1489707263/seedfiles/logo_lmxqhk.png"/>
						<div className="login-inputs">
							<input type="text"
								className="inputs"
								value={this.state.username}
								placeholder="Username"
								onChange={this.update("username")}/>
							<input type="password"
								className="inputs"
								value={this.state.password}
								placeholder="Password"
								onChange={this.update("password")}/>
							<input type="submit" value="Submit" className="splash-button" />
						</div>
					</form>
					<div className='or-obj'>
						<div className="or-line"></div>
						<figure className="or">OR</figure>
						<div className="or-line"></div>
					</div>
					<button onClick={this.handleGuestLogin} className="splash-button" >Guest Login</button>
					<div>
						{this.renderErrors()}
					</div>
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
