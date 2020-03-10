import React from 'react';
import { Route } from 'react-router-dom';

import ServerNameButtonContainer from './server_name_button_container';
import UserNameButtonContainer from './user_name_button_container';
import ServerInviteButtonContainer from './server_invite_button_container';
import ChannelListContainer from './channel_list_container';

class ChannelBar extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="channel-bar-container">
        <Route path="/channels/:serverId" component={ServerNameButtonContainer} />
        <section id="channel-bar">
          <Route path="/channels/:serverId" component={ServerInviteButtonContainer} />
          <Route path="/channels/:serverId" component={ChannelListContainer} />
        </section>
        <UserNameButtonContainer />
      </div>
    )
  }
}

export default ChannelBar;