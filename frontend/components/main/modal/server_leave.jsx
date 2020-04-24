import React from 'react';

class ServerLeave extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const serverId = Number(this.props.match.params.serverId);
    const userId = this.props.session.id;
    const subs = Object.values(this.props.subscriptions);
    const sub = subs.filter(subscription => subscription.userId === userId && subscription.serverId === serverId)[0];
    this.props.leaveServer(sub);
    this.props.history.push('/channels/@me');
    this.props.closeModal();
  }

  handleCancel(e) {
    e.preventDefault()
    this.props.closeModal();
  }

  render() {
    return (
      <form className="channel-form" onSubmit={this.handleSubmit}>
        <h2 className="channel-header-label">leave server</h2>
        <h3 id="channel-delete-subheader">Are you sure you want to leave this server?</h3>
        <h3 id="channel-delete-subheader">You can come back as long as you have the server key.</h3>
        <img className="channel-delete-image" src={window.channelDestroyBomb}></img>
        <div className="channel-button-container">
          <button className="channel-cancel-button" onClick={this.handleCancel}>Cancel</button>
          <input className="channel-submit-button" type="submit" value="Leave Server"/>
        </div>
      </form>
    )
  }

}

export default ServerLeave;