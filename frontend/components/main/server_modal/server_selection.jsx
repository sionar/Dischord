import React from 'react';
import { openModal } from '../../../actions/modal_actions';

class ServerSelection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="server-selection-form">
        <h2 id="server-selection-header">OH, ANOTHER SERVER HUH?</h2>
        <div id="server-selection-buttons-container">
          <button className="server-selection-button" id="server-selection-create-button">
            <h3>CREATE</h3>
            <p>Create a new server and invite your friends. It's free!</p>
            <img className="server-selection-image" src={window.createServerIcon}></img>
            <div className="server-bottom-button" id="server-create-bottom-button">Create a server</div>
          </button>
          <button className="server-selection-button" id="server-selection-join-button">
            <h3>JOIN</h3>
            <p>Enter an invite and join your friend's server.</p>
            <img className="server-selection-image" src={window.joinServerIcon}></img>
            <div className="server-bottom-button" id="server-join-bottom-button">Join a server</div>
          </button>
        </div>
      </div>
    )
  }
}

export default ServerSelection;