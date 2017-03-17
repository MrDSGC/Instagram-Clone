import React from 'react';
import NavBarContainer from './nav_bar_container';

class MainPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return(
      <div>
        <nav>
          <NavBarContainer />
        </nav>
        <div>
          { this.props.children }
        </div>
      </div>

    )
  };
}

export default MainPage;
