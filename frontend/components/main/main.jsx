import React from 'react';
import { Route } from 'react-router-dom';

import ServerBarContainer from './server_bar/server_bar_container';
import ServerNameButtonContainer from './channel_bar/server_name_button_container';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="main-container">
        <ServerBarContainer />
        <div id="channel-bar-container">
          <Route exact path="/channels/:serverId" component={ServerNameButtonContainer} />
          <section id="channel-bar"></section>
          <section id="user-name-button"></section>
        </div>
        
        <div id="content-outer-container">
            <section id="header-bar"></section>
          <div id="content-body-container">
            <section id="messages-box"></section>
            <section id="users-bar"></section>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;