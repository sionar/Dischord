import React from 'react';

const ServerInviteButton = (props) => {
  let serverId = props.match.params.serverId;
  let label, id;
  if (serverId === "@me")
    return null;
  else {
    return (
      <section id="server-invite-button">
        <img id="server-invite-button-image" src={window.serverChannelBarInvite}/>
        <p className="server-invite-button-sublabel">An adventure begins.</p>
        <p className="server-invite-button-sublabel">Lets add some party members!</p>
        <button id="server-invite-button-button" onClick={props.openModal}>Invite People</button>
      </section>
    )
  }
}

export default ServerInviteButton;