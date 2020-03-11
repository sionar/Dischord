import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';

import SplashDemoButtonContainer from './splash-demo-button-container';

const SplashBody = (props) => {
  return (
    <section id="splash-body-flex-container">
      <div id="splash-text-container">
        <h1 id="splash-h1">It's time to ditch Skype and TeamSpeak.</h1>
        <p id="splash-p">All-in-one voice and text chat for gamers that's free, secure, and works on both your desktop and phone. Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.</p>
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