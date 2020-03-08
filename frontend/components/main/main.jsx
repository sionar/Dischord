import React from 'react';
import { Route } from 'react-router-dom';

import ServerBarContainer from './server_bar/server_bar_container';
import ServerNameButtonContainer from './channel_bar/server_name_button_container';
import UserNameButtonContainer from './channel_bar/user_name_button_container';
import UsersBarContainer from './users_bar/users_bar_container';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="main-container">
        <ServerBarContainer />
        <div id="channel-bar-container">
          <Route path="/channels/:serverId" component={ServerNameButtonContainer} />
          <section id="channel-bar"></section>
          <UserNameButtonContainer />
        </div>
        
        <div id="content-outer-container">
            <section id="header-bar"></section>
          <div id="content-body-container">
            <section id="messages-box"></section>
            <Route exact path="/channels/:serverId" component={UsersBarContainer} />
          </div>
        </div>
      </div>
    )
  }
}

export default Main;