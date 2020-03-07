import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton = () => {
  return (
    <Link to="/channels/@me">
      <div className="server-bar-server-button" id="server-bar-home-button">
          <div className="server-button-hover-label"><p>Home</p></div>
      </div>
    </Link>
  )
}

export default HomeButton;
