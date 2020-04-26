import React from 'react';

import MessageItemContainer from './message_item_container';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.editMessageId === null && prevProps.editMessageId === null) {
      const messageBox = document.getElementById('message-box-inner-container');
      messageBox.scrollTo({left: 0, top: messageBox.scrollHeight, behavior: 'smooth'});
    }
  }
  
  setEditId(id) {
    this.editId = id;
  }

  render() {
    const messages = this.props.messageBlocks[0].length > 0 ?    
      this.props.messageBlocks.map(
        messageBlock => <MessageItemContainer key={messageBlock[0].id} messageBlock={messageBlock}/>
      )
      : null
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