import React from 'react';
import MessageActionsContainer from './message_actions_container';

class MessageItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editInput: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.editId && prevProps.editId !== this.props.editId) {
      this.setState({editInput: this.props.messages[this.props.editId].content});
    }
  }

  handlePress(e) {
    if (e.key === 'Escape') {
      this.props.setEditMessageId(null);
    }
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({editInput: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let message = this.props.messages[this.props.editId];
    if (this.state.editInput !== message.content) {
      message.content = this.state.editInput;
      const channel = this.props.channels[message.channelId];  
      this.props.updateMessage(message, channel);
    }

    this.props.setEditMessageId(null);
  }

  render() {
    const firstMessage = this.props.messageBlock[0];
    const otherMessages = this.props.messageBlock.slice(1);
    const firstMessageEdited = firstMessage.edited ? <span className="message-edited">(edited)</span> : null
    const firstMessageContent = (firstMessage.id === this.props.editId) ?
      <form className="message-edit-box-form" onSubmit={this.handleSubmit}>
        <input className="message-edit-box-input"onChange={this.handleChange} value={this.state.editInput}/>
        <p className="message-edit-box-footer">escape to cancel • enter to save</p>
      </form> :
      <span className="message-first-content-text">{firstMessage.content}{firstMessageEdited}</span>
      
    const otherMessagesContent = otherMessages.map(message =>
        <div key={message.id} className="message-other-container">
          <div className="message-content-time">{moment(message.createdAt).format('h:mm A')}</div>
          {message.id === this.props.editId ?
            <form className="message-edit-box-form" onSubmit={this.handleSubmit}>
              <input className="message-edit-box-input" onChange={this.handleChange} value={this.state.editInput}/>
              <p className="message-edit-box-footer">escape to cancel • enter to save</p>
            </form> :
            <div className="message-content-text">{message.content}{message.edited ? <span className="message-edited">(edited)</span> : null}</div>}
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
      <div className="message-block" onKeyDown={this.handlePress} >
        <div className="message-first-container">
          <img className="message-user-image" src={userImageUrl}></img>
          <div className="message-first-body">
            <div className="message-header-container">
              <span className="message-header-username">{username}</span>
              <span className="message-header-time">{timeDisplay}</span>
            </div>
            {firstMessageContent}
          </div>
          <MessageActionsContainer message={firstMessage}/>
        </div>
        {otherMessagesContent}
      </div>
    )
  }
}

export default MessageItem;