import React from 'react';

class ServerCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: `${this.props.user.username}'s Server`,
      private: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange() {
    return e => this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.makeServer(this.state);
  }

  handleClick(modal) {
    return e => {
      e.preventDefault();
      this.props.openModal(modal);
    }
  }

  render() {
    return(
      <div id="server-create-form">
        <div id="server-create-form-top">
          <h2 id="server-create-header">Create Your Server</h2>
          <h3 id="server-create-subheader">A server is a superpowered group chat where people come together around a topic or to hang out.</h3>          
          <div id="server-image-icon-container">
            <div id="server-image-icon-placeholder"><p>Upload an image</p></div>
          </div>
          <div id="server-create-name-container">
            <label id="server-create-name-label">SERVER NAME</label>
            <input id="server-create-name-input" onChange={this.handleChange()} type="text" value={this.state.name}></input>
          </div>
        </div>
        <div id="server-create-buttons-bottom">
          <button onClick={this.handleClick("select")} id="server-create-back-button">Back</button>
          <button onClick={this.handleSubmit} id="server-create-create-button">Create Server</button>
        </div>
      </div>
    )
  }
}

export default ServerCreate;







