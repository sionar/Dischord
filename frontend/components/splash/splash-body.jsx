import React from 'react';
import { Link } from 'react-router-dom';

const SplashBody = () => {
  return (
    <section id="splash-body-flex-container">
      <div id="splash-text-container">
        <h1 id="splash-h1">It's time to ditch Skype and TeamSpeak.</h1>
        <p id="splash-p">All-in-one voice and text chat for gamers that's free, secure, and works on both your desktop and phone. Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.</p>
      </div>
      <div id="splash-button-container">
        <Link to="/@me">
          <button id="splash-demo-button" className="splash-button">Try for free</button>
        </Link>
        <Link to="/register">
          <button id="splash-register-button" className="splash-button">Sign up</button>
        </Link>
      </div>        
    </section>  
  )
};

export default SplashBody;