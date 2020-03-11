import React from 'react';

class ChannelEdit extends React.Component {
  constructor(props) {
    super(props)
    const channel = this.props.channels[this.props.channelId]
    this.state = {
      id: channel.id,
      serverId: channel.serverId,
      name: channel.name,
      description: channel.description
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    this.props.openModal('deleteChannel')
  }

  handleSubmit(e) {
    e.preventDefault();   
    this.props.updateChannel({channel: this.state});
    this.props.closeModal();
  }

  render() {
    return( 
      <form className="channel-form" onSubmit={this.handleSubmit}>
        <h2 className="channel-header-label">update channel</h2>
        <label className="channel-form-label">Name</label>
        <input className="channel-form-input" type="text" onChange={this.handleChange("name")} type="text" value={this.state.name}/>
        <label className="channel-form-label" >Channel Topic</label>
        <textarea className="channel-form-input" id="channel-form-desc-input" type="text" onChange={this.handleChange("description")} type="text" value={this.state.description}></textarea>
        <div className="channel-button-container">
          <button className="channel-delete-button" onClick={this.handleClick}>Delete Channel</button>
          <button className="channel-cancel-button">Cancel</button>
          <input className="channel-submit-button" type="submit" value="Update Channel"/>
        </div>
      </form>
    )
  }
}

export default ChannelEdit;