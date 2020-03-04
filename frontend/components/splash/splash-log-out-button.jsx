import React from 'react';

class SplashLogOutButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.logoutUser();
  }

  render() {
    return (
      <button className="splash-header-button" onClick={this.handleClick}>Log Out</button>
    )
  }
}

export default SplashLogOutButton;