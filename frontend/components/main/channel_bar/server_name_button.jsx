import React from 'react';

const ServerNameButton = (props) => {
  let serverId = props.match.params.serverId;
  let label, id;
  if (serverId === "@me")
    label = "Home";
  else {
    id = Number(serverId);
    label = props.servers[id] ? props.servers[id].name : "";
  }

  return (
    <section id="server-name-button"><span>{label}</span></section>
  )
}

export default ServerNameButton;