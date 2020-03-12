import React from 'react';
import { Route } from 'react-router-dom';

import ModalContainer from './modal/modal_container';
import HeaderBarContainer from './header_bar/header_bar_container';
import ServerNameButtonContainer from './channel_bar/server_name_button_container';
import ServerBarContainer from './server_bar/server_bar_container';
import UsersBarContainer from './users_bar/users_bar_container';
import ChannelBarContainer from './channel_bar/channel_bar_container';
import MessageBox from './message_box/message_box';
import ListenerContainer from './listener_container'

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="main-container">
        <ListenerContainer />
        <ModalContainer />
        <ServerBarContainer />
        <div id="content-outer-container">
          <div id="content-header-container">
            <Route path="/channels/:serverId" component={ServerNameButtonContainer} />
            <Route path="/channels/:serverId/:channelId" component={HeaderBarContainer} />
          </div>
          <div id="content-body-container">
            <ChannelBarContainer />      
            <MessageBox />
            <Route path="/channels/:serverId/:channelId" component={UsersBarContainer} />
          </div>
        </div>
      </div>
    )
  }
}

export default Main;