import React from 'react';

class ServerInvite extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const el = document.getElementById('server-invite-form-input');
    el.select();
    document.execCommand("copy");
  }

  render() {
    const serverId = this.props.match.params.serverId;
    const serverName = this.props.servers[serverId].name;
    const serverKeys = Object.values(this.props.serverKeys);
    let serverKey;
    for (let i = 0; i < serverKeys.length; i++) {
      if (serverKeys[i].serverId === serverId){
        serverKey = serverKeys[i].serverKey;
        break;
      }
    }

    return (
      <div id="server-invite-form">
        <div id="server-invite-form-header">
          <h2 id="server-invite-form-label">INVITE FRIENDS TO {serverName}</h2>
        </div>
        <img id="server-invite-form-image" src={window.serverKeyInvite}></img>
        <p id="server-invite-subheader">Share this code with others to grant access to your server!</p>
        <div id="server-invite-input-container">
          <input id="server-invite-form-input" value={serverKey} readOnly></input>
          <button id="server-invite-copy-button" onClick={this.handleClick}>Copy</button>
        </div>
      </div>
    )
  }
}

export default ServerInvite;