import React from 'react';
import ServerNameDropdownContainer from './server_name_dropdown_container';

class ServerNameButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ selected: !this.state.selected})
  }

  render() {
    const serverId = this.props.match.params.serverId;
    let id, label, isOwner, serverNameDropdown;
    if (serverId === "@me")
      label = "Home";
    else {
      id = Number(serverId);
      label = this.props.servers[id] ? this.props.servers[id].name : "";
    }
    if (this.props.servers[serverId]) {
      isOwner = this.props.servers[serverId].ownerId === this.props.currentUserId;
      serverNameDropdown = <ServerNameDropdownContainer isOwner={isOwner}/>
    } else {
      serverNameDropdown = null;
    }

    return (
      <section id="server-name-button" tabIndex="1" onClick={this.handleClick}>
        <span>{label}</span>
        <svg id="server-name-dropdown-icon" fill="rgba(255,255,255,0.6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"/></svg>
        {serverNameDropdown}
      </section>
    )
  }
}

export default ServerNameButton;