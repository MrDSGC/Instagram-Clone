import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.isFollowingAnyone();
  }

  messageOutput () {
    if ( !this.props.following) {
      return (
        "You are not following anyone! Here are a few random posts..."
      )
    }
  }

  render () {
    return (
      <div>
        {this.messageOutput()}
      </div>
    )
  }
}


export default Message;
