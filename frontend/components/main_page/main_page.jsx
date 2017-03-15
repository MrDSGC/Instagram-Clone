import React from 'react';
class MainPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return(
      <div>
        <nav>NAV BAR GOES HERE</nav>
        <div>
          { this.props.children }
        </div>
      </div>

    )
  };
}

export default MainPage;
