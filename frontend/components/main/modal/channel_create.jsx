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
      <form className="channel-form" onSubmit={this.handleSubmit}>
        <h2 className="channel-header-label">create channel</h2>
        <label className="channel-form-label">Name</label>
        <input className="channel-form-input" type="text" onChange={this.handleChange("name")} type="text" value={this.state.name}/>
        <label className="channel-form-label" >Channel Topic</label>
        <textarea className="channel-form-input" id="channel-form-desc-input" type="text" onChange={this.handleChange("description")} type="text" value={this.state.description}></textarea>
        <div className="channel-button-container">
          <button className="channel-cancel-button">Cancel</button>
          <input className="channel-submit-button" type="submit" value="Create Channel"/>
        </div>
      </form>
    )
  }
}

export default ChannelCreate;