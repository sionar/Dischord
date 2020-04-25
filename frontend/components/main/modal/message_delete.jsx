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
    this.props.closeModal();
  }

  render() {
    return( 
      <form className="channel-form" onSubmit={this.handleSubmit}>
        <h2 className="channel-header-label">delete message</h2>
        <h3 className="message-delete-subheader">Are you sure you want to delete this message?</h3>
        
        <div className="channel-button-container">
          <button className="channel-cancel-button" onClick={this.handleCancel}>Cancel</button>
          <input className="channel-submit-button" type="submit" value="Delete"/>
        </div>
      </form>
    )
  }
}

export default MessageDelete;