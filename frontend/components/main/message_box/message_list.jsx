import React from 'react';

import MessageItemContainer from './message_item_container';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.messageBlocks[0].length === 0)
      return null;
    const messages = this.props.messageBlocks.map(
      messageBlock => <MessageItemContainer key={messageBlock[0].id} messageBlock={messageBlock}/>
    )

    return (
      <div id="message-box-container">
        <div id="message-box-inner-container">
          {messages}
        </div>
      </div>
    )
  }
}

export default MessageList;