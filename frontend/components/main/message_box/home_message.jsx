import React from 'react';


class HomeMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div id="home-message-box">
          <div id="home-message-content">
            <h1 id="home-message-header">Welcome to Dischord, friend!</h1>
            <p id="home-message-paragraph">To check out a server, click on one of the circles on the bar on the left. You can also create your own server by clicking on the <span style={{color:'#43B581'}}>green</span> plus sign. You can add or change your avatar by clicking on the circle next to your name on the bottom left. Have fun! </p>
            <img id="home-message-image" src={window.homeMessage}></img>
          </div>
        </div>
    )
  }
}

export default HomeMessage;