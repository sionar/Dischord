import React from 'react';
import { NavLink, Link } from 'react-router-dom'; 

class ServerButton extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const server = this.props.server
    return (
      <NavLink to={`/channels/${server.id}/${server.activeChannel}`} activeClassName="server-button-active" >
          <div className="server-bar-server-button">
            <img className="server-image" src={server.imageUrl}></img>
            <div className="server-button-hover-label"><p>{server.name}</p></div>
          </div>
      </NavLink>
    )
  }
}

export default ServerButton;