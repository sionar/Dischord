import React from 'react';
import SplashHeader from './splash-header';
import SplashBody from './splash-body';
import SplashImages from './splash-images';
import SplashFooter from './splash-footer';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="splash-flex-container">
        <SplashHeader loggedIn={this.props.loggedIn} logoutUser={this.props.logoutUser}/>
        <SplashBody loggedIn={this.props.loggedIn}/>
        <SplashImages />
        <SplashFooter loggedIn={this.props.loggedIn}/>
      </div>
    )
  }
}

export default Splash;

