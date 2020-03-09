import React from 'react';
import { NavLink } from 'react-router-dom'; 

class ServerButton extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <NavLink to={`/channels/${this.props.server.id}`} activeClassName="server-button-active" >
        <div className="server-bar-server-button">
          <img className="server-image" src={this.props.server.imageUrl}></img>
          <div className="server-button-hover-label"><p>{this.props.server.name}</p></div>
        </div>
      </NavLink>
    )
  }
}

export default ServerButton;