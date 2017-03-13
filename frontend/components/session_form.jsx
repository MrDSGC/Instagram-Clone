import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          username: "",
          password: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this)
      this.update = this.update.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
  		const user = this.state;
  		this.props.action(user);
  }


  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  render () {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text"
            value={this.state.username}
            onChange={this.update("username")} />
        </label>
        <label>
          Password:
          <input type="password"
            value={this.state.password}
            onChange={this.update("password")} />
        </label>
        <input type="submit"/>
			</form>
    )
  }
}

export default SessionForm;
