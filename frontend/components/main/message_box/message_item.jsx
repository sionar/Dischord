import React from 'react';
import MessageActionsContainer from './message_actions_container';

class MessageItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const firstMessage = this.props.messageBlock[0];
    const otherMessages = this.props.messageBlock.slice(1);
    const otherMessagesContent = otherMessages.map(message =>
      <div key={message.id} className="message-other-container">
        <div className="message-content-time">{moment(message.createdAt).format('h:mm A')}</div>
        <div className="message-content-text">{message.content}</div>
        <MessageActionsContainer message={message}/>
      </div>
    )
    const username = this.props.users[firstMessage.userId].username;
    const userImageUrl = this.props.users[firstMessage.userId].imageUrl;
    const time = moment(firstMessage.createdAt);
    const now = moment();
    let timeDisplay;
    if (now.diff(time, 'days') >= 7)
      timeDisplay = time.calendar();
    else if (now.diff(time, 'days') >= 2)
      timeDisplay = time.format("dddd [at] h:mm A");
    else if (now.diff(time, 'days') >= 1)
      timeDisplay = time.format("[Yesterday at] h:mm A");
    else
      timeDisplay = time.format("[Today at] h:mm A");
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
          <MessageActionsContainer message={firstMessage}/>
        </div>
        {otherMessagesContent}
      </div>
    )
  }
}

export default MessageItem;