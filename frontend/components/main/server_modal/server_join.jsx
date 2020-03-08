import React from 'react';

class ServerJoin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      server_key: ''
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
    this.props.joinServer(this.state);
  }

  handleClick(modal) {
    return e => {
      e.preventDefault();
      this.props.openModal(modal);
    }
  }

  render() {
    return(
      <div id="server-join-form">
        <h2 id="server-join-header">JOIN A SERVER</h2>
        <h3 id="server-join-subheader">Enter an invite below to join an existing server.</h3>
        <h3 id="server-join-subheader2">The invite will look something like this:</h3>
        <p id="server-join-example"> cFummm </p>
                
        <div id="server-join-input-container">
          <input onChange={this.handleChange()} type="text" value={this.state.name}></input>
          <label id="server-join-name-label">Enter an invite</label>
        </div>
        <div id="server-join-buttons-bottom">
          <button onClick={this.handleClick("select")} id="server-join-back-button">Back</button>
          <button onClick={this.handleSubmit} id="server-join-join-button">Join</button>
        </div>
      </div>
    )
  }
}

export default ServerJoin;







