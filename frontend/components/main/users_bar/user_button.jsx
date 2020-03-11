import React from 'react';

class UserButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="users-bar-user-name">
        <img className="users-bar-user-image" src={this.props.user.imageUrl}></img>
        <p className="users-bar-user-text">{this.props.user.username}</p>
      </div>
    )
  }

}

export default UserButton;