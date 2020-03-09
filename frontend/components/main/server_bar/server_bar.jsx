import React from 'react';

import HomeButton from './home_button';
import ServerButton from './server_button';
import AddServerButtonContainer from './add_server_button_container';

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
        <AddServerButtonContainer />
      </section>
    )
  }
}

export default ServerBar;