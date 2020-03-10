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
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();   
    this.props.updateChannel({channel: this.state});
  }

  render() {
    return( 
      <form id="channel-edit-form" onSubmit={this.handleSubmit}>
        <h2>Update Channel</h2>
        <label>Name</label>
        <input type="text" onChange={this.handleChange("name")} type="text" value={this.state.name}/>
        <label>Channel Topic</label>
        <input type="text" onChange={this.handleChange("description")} type="text" value={this.state.description}/>
        <input type="submit" type="submit" value="Update Channel"/>
      </form>
    )
  }
}

export default ChannelEdit;