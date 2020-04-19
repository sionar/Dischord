import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';

import SplashDemoButtonContainer from './splash-demo-button-container';

const SplashBody = (props) => {
  return (
    <section id="splash-body-flex-container">
      <div id="splash-text-container">
        <h1 id="splash-h1">A new way to chat with your communities and friends.</h1>
        <p id="splash-p">Discord is the easiest way to communicate over voice, video, and text, whether you’re part of a school club, a nightly gaming group, a worldwide art community, or just a handful of friends that want to hang out.</p>
      </div>
      <div id="splash-button-container">
        <SplashDemoButtonContainer/>
        <Link to={props.loggedIn ? "/channels/@me" : "/register"}>
          <button id="splash-register-button" className="splash-button">{props.loggedIn? "Open Dischord" : "Sign up"}</button>
        </Link>
      </div>        
    </section>  
  )
};

export default SplashBody;