import React from 'react';
import { Route } from 'react-router-dom';

import MessageListContainer from './message_list_container';
import MessageInputBoxContainer from './message_input_box_container';

class MessageBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="message-box">
        <div id="message-box-inner">
          <Route path="/channels/:serverId/:channelId" component={MessageListContainer} />
          <Route path="/channels/:serverId/:channelId" component={MessageInputBoxContainer} />
        </div>
      </section>
    )
  }
}

export default MessageBox;