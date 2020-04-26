import React from 'react';

class MessageDelete extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  handleSubmit(e) {
    e.preventDefault();
    const message = this.props.messages[this.props.id];
    const channel = this.props.channels[message.channelId];
    this.props.destroyMessage(message, channel);
    this.props.closeModal();
  }

  render() {
    const message = this.props.messages[this.props.id];
    const user = this.props.users[message.userId];
    const username = user.username;
    const userImageUrl = user.imageUrl;
    const time = moment(message.createdAt);
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
    return( 
      <form className="message-delete-form" onSubmit={this.handleSubmit}>
        <h2 className="message-delete-header-label">delete message</h2>
        <h3 className="message-delete-subheader">Are you sure you want to delete this message?</h3>
        <div className="message-delete-message-container">
          <img className="message-delete-user-image" src={userImageUrl}></img>
          <div className="message-delete-body">
            <div className="message-delete-header-container">
              <span className="message-delete-header-username">{username}</span>
              <span className="message-delete-header-time">{timeDisplay}</span>
            </div>
            <span className="message-delete-content-text">{message.content}</span>
          </div>
        </div>
        <div className="message-delete-button-container">
          <button className="message-delete-cancel-button" onClick={this.handleCancel}>Cancel</button>
          <input className="message-delete-submit-button" type="submit" value="Delete"/>
        </div>
      </form>
    )
  }
}

export default MessageDelete;