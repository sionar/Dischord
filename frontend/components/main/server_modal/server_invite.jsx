import React from 'react';

class ServerInvite extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="server-invite-form">
        <h2 id="server-invite-form-header">INVITE FRIENDS TO SERVER</h2>
        <img id="server-invite-form-image" src={window.serverKeyInvite}></img>
        <p id="server-invite-subheader">Share this code with others to grant access to your server!</p>
      </div>
    )
  }

}

export default ServerInvite;