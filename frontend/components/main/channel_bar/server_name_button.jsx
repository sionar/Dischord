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
    let id, label
    if (serverId === "@me")
      label = "Home";
    else {
      id = Number(serverId);
      label = this.props.servers[id] ? this.props.servers[id].name : "";
    }
    const isOwner = this.props.servers[serverId].ownerId === this.props.currentUserId;
    const serverNameDropdown = this.state.selected ? <ServerNameDropdownContainer isOwner={isOwner}/> : null;
    return (
      <section id="server-name-button" tabIndex="1" onClick={this.handleClick}>
        <span>{label}</span>
        {serverNameDropdown}
      </section>
    )
  }
}

export default ServerNameButton;