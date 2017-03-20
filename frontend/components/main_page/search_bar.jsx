import React from 'react';
import { Link, hashHistory } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  render () {
    return {
      
    }
  }
}

export default SearchBar;
