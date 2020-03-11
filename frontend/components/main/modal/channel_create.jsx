import React from 'react';

class ChannelCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      serverId: this.props.match.params.serverId
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();   
    this.props.makeChannel({channel: this.state});
    this.props.closeModal();
  }

  render() {
    return( 
      <form id="channel-edit-form" onSubmit={this.handleSubmit}>
        <h2>Create Channel</h2>
        <label>Name</label>
        <input type="text" onChange={this.handleChange("name")} type="text" value={this.state.name}/>
        <label>Channel Topic</label>
        <input type="text" onChange={this.handleChange("description")} type="text" value={this.state.description}/>
        <button>Back</button>
        <input type="submit" type="submit" value="Create Channel"/>
      </form>
    )
  }
}

export default ChannelCreate;