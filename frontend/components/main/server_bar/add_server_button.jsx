import React from 'react';

const AddServerButton = () => {
  return (
    <div className="server-bar-server-button" id="add-server-button-container">
      <img src={window.addServerIcon} id="add-server-button-icon"/>
      <div className="server-button-hover-label"><p>Add Server</p></div>
    </div>
  )
}

export default AddServerButton;
