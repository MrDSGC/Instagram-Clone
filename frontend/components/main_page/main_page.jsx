import React from 'react';
class MainPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return(
      <div>
        <h1>CurrentUser: {this.props.currentUser.username} </h1>
        <div>
          { this.children }
        </div>
      </div>

    )
  };
}

export default MainPage;
