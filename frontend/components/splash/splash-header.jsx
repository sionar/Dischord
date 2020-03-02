import React from 'react';
import { Link } from 'react-router-dom';

const SplashHeader = () => {
  return (
    <header id="splash-header-flex-container">
      <div id="splash-header-left-flexbox">
      <Link to="/">
        <img src="/assets/splash-header-logo.svg" id="splash-header-logo"/>
        <img src="/assets/splash-header-label.svg" id="splash-header-label"/>
      </Link>
      </div>
      <div id="splash-header-right-flexbox">
        <a href="https://github.com/sionar">
          <img src="/assets/splash-header-github-logo.svg" id="splash-header-github-logo"/>
        </a>
          <Link to="/login">
            <button id="splash-header-login-button">Login</button>
          </Link>
      </div>
    </header>  
  )
};

export default SplashHeader;