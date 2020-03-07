import React from 'react';

import HomeButton from './home_button';
import ServerButton from './server_button';
import AddServerButton from './add_server_button';

class ServerBar extends React.Component{
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <section id="server-bar">
        <HomeButton />
        <div className="server-bar-separator"></div>
        {this.props.servers.map(server => <ServerButton key={server.id} server={server} />)}
        <AddServerButton />
      </section>
    )
  }
}

export default ServerBar;