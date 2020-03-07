import React from 'react';
import { Link } from 'react-router-dom'; 

class ServerButton extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <Link to={`/channels/${this.props.server.id}`}>
        <div className="server-bar-server-button">
          <div className="server-button-hover-label"><p>{this.props.server.name}</p></div>
        </div>
      </Link>
    )
  }
}

export default ServerButton;