import React from 'react';

class MessageActions extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(id) {
    this.props.setEditMessageId(id);
  }

  handleDelete(id) {
    this.props.setDeleteMessageId(id);
    this.props.openModal('deleteMessage'); 
  }

  render() {
    const server = this.props.servers[this.props.match.params.serverId];
    const editButton = this.props.message.userId == this.props.currentUser ?
    <button className="message-edit-button" onClick={() => this.handleEdit(this.props.message.id)}>
      <svg className="message-edit-icon" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.1039 9.58997L20.8239 8.87097C22.3929 7.30197 22.3929 4.74797 20.8239 3.17797C19.2549 1.60897 16.6999 1.60897 15.1309 3.17797L14.4119 3.89797L20.1039 9.58997ZM12.9966 5.30896L4.42847 13.8795L10.1214 19.5709L18.6896 11.0003L12.9966 5.30896ZM3.24398 21.968L8.39998 20.68L3.31998 15.6L2.03098 20.756C1.94598 21.096 2.04598 21.457 2.29398 21.705C2.54198 21.953 2.90298 22.052 3.24398 21.968Z"></path></svg>
    </button> : null;
    const deleteButton = (server.ownerId == this.props.currentUser) || (this.props.message.userId == this.props.currentUser) ?
      <button className="message-delete-button" onClick={() => this.handleDelete(this.props.message.id)}>
        <svg className="message-delete-icon" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"></path><path fill="currentColor" d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z"></path></svg>
      </button> : null;
    return (
      <div className="message-actions-panel">
        {editButton}
        {deleteButton}
      </div>
    )
  }
}

export default MessageActions;