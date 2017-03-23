import React from 'react';
import { Link, withRouter } from 'react-router';

class SignUpForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
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
		this.props.signup(user);
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
			<div className="signup-component">
				<div className="signup-form">
					<img className="logo-header" src="https://res.cloudinary.com/mrdsgc/image/upload/v1489707263/seedfiles/logo_lmxqhk.png"/>
					<form className="auth-form" onSubmit={this.handleSubmit} >
						<div className="signup-inputs">
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
							<input type="submit" value="Submit" className="splash-button"/>
						</div>
					</form>
					<div >
						{this.renderErrors()}
					</div>
				</div>
        <div className="to-login">
          <p>Have an acount?</p>

          <Link to="login">Log in</Link>
        </div>
			</div>
		);
	}

}

export default withRouter(SignUpForm);
