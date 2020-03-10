import React from 'react';
import { Route } from 'react-router-dom';

import ServerModalContainer from './server_modal/server_modal_container';
import ServerBarContainer from './server_bar/server_bar_container';
import UsersBarContainer from './users_bar/users_bar_container';
import ChannelBarContainer from './channel_bar/channel_bar_container';
import HeaderBarContainer from './header_bar/header_bar_container';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="main-container">
        <ServerModalContainer />
        <ServerBarContainer />
        <ChannelBarContainer />      
        <div id="content-outer-container">
            <Route path="/channels/:serverId/:channelId" component={HeaderBarContainer} />
          <div id="content-body-container">
            <section id="messages-box"></section>
            <Route path="/channels/:serverId/:channelId" component={UsersBarContainer} />
          </div>
        </div>
      </div>
    )
  }
}

export default Main;