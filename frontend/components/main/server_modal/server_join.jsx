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
    return e => this.setState({ server_key: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.getServer(this.state.server_key)
      .then(res => this.props.closeModal());
  }

  handleClick(modal) {
    return e => {
      e.preventDefault();
      this.props.openModal(modal);
    }
  }

  

  render() {
    const errors = this.props.errors.length > 0 ? <p id="server-join-error">{this.props.errors[0]}</p> : null;
    return(
      <div id="server-join-form">
        <div id="server-join-form-top">
          <h2 id="server-join-header">JOIN A SERVER</h2>
          <h3 className="server-join-subheader" id="server-join-subheader-1">Enter an invite below to join an existing server.</h3>
          <h3 className="server-join-subheader">The invite will look something like this:</h3>
          <p id="server-join-example">cFuMkm</p>
          <div id="server-join-input-container">
            <input id="server-join-name-input" onChange={this.handleChange()} type="text" value={this.state.name}></input>
            <div id="server-join-label-container">
              <label id="server-join-name-label">Enter an invite</label>
              {errors}
            </div>
          </div>
        </div>
        <div id="server-join-buttons-bottom">
          <div id="server-join-buttons-container">     
              <button onClick={this.handleClick("select")} id="server-join-back-button">
                <img src={window.serverJoinBackIcon} id="server-join-back-icon"/> BACK
              </button>

            <button onClick={this.handleSubmit} id="server-join-join-button">Join</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ServerJoin;







