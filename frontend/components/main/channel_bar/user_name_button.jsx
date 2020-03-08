import React from 'react';

const UserNameButton = (props) => {
  const username = props.currentUser ? props.currentUser.username : null; 
  const usertag = props.currentUser ? props.currentUser.usertag : null; 

  return (
    <section id="user-name-button">
      <div id="user-name-button-content">
        <img src={window.defaultAvatar} id="user-name-avatar"/>
        <div id="user-name-box">
          <div id="user-name-button-username">{username}</div>
          <div id="user-name-button-usertag">#{usertag}</div>
        </div>
      </div>
    </section>
  )
}

export default UserNameButton;