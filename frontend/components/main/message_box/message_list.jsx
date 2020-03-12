import React from 'react';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const messages = this.props.messages.map(message => <div>{message.content}</div>)

    return (
      <div id="messages-box-container">
        <div id="messages-box-inner-container">
          {messages}
        </div>
      </div>
    )
  }
}

export default MessageList;