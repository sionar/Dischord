import React from 'react';

class ServerSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(modal) {
    return e => {
      e.preventDefault();
      this.props.openModal(modal);
    }
  }

  render() {
    return(
      <div id="server-select-form">
        <h2 id="server-select-header">OH, ANOTHER SERVER HUH?</h2>
        <div id="server-select-buttons-container">
          <button onClick={this.handleClick("create")} className="server-select-button" id="server-select-create-button">
            <h3>CREATE</h3>
            <p>Create a new server and invite your friends. It's free!</p>
            <img className="server-select-image" src={window.createServerIcon}></img>
            <div className="server-select-bottom-button" id="server-select-create-bottom-button">Create a server</div>
          </button>
          <button onClick={this.handleClick("join")} className="server-select-button" id="server-select-join-button">
            <h3>JOIN</h3>
            <p>Enter an invite and join your friend's server.</p>
            <img className="server-select-image" src={window.joinServerIcon}></img>
            <div className="server-select-bottom-button" id="server-select-join-bottom-button">Join a server</div>
          </button>
        </div>
      </div>
    )
  }
}

export default ServerSelect;