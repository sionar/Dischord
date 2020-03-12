import React from 'react';

class MessageItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    const messageBox = document.getElementById('message-box-inner-container');
    messageBox.scrollTop = messageBox.scrollHeight;
  }

  render() {
    const firstMessage = this.props.messageBlock[0];
    const otherMessages = this.props.messageBlock.slice(1);
    const otherMessagesContent = otherMessages.map(message => 
    <div key={message.id} className="message-content-text">{message.content}</div>
    )
    const username = this.props.users[firstMessage.userId].username;
    const userImageUrl = this.props.users[firstMessage.userId].imageUrl;
    const time = moment(firstMessage.createdAt);
    const now = moment();
    let timeDisplay;
    if (now.diff(time, 'days') > 1)
      timeDisplay = time.format("MMM D YY");
    else
      timeDisplay = time.fromNow();
      
    return (
      <div className="message-block">
        <div className="message-first-container">
          <img className="message-user-image" src={userImageUrl}></img>
          <div className="message-first-body">
            <div className="message-header-container">
              <span className="message-header-username">{username}</span>
              <span className="message-header-time">{timeDisplay}</span>
            </div>
            <span className="message-first-content-text">{firstMessage.content}</span>
          </div>
        </div>
        {otherMessagesContent}
      </div>
    )
  }
}

export default MessageItem;