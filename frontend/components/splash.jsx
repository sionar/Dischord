import React from 'react';
import SplashHeader from './splash-header';
import SplashBody from './splash-body';
import SplashImages from './splash-images';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="splash-flex-container">
        <SplashHeader />
        <SplashBody />
        <SplashImages />
      </div>
    )
  }

}

export default Splash;

