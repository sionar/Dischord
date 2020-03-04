import React from 'react';
import { Link } from 'react-router-dom';
import SplashLogOutButton from './splash-log-out-button';

const SplashHeader = (props) => {
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
          <Link to={props.loggedIn ? "/channels/@me" : "/login"}>
            <button className="splash-header-button">{props.loggedIn? "Open" : "Login"}</button>
          </Link>
          {props.loggedIn ? <SplashLogOutButton logoutUser={props.logoutUser}/> : null}
      </div>
    </header>  
  )
};

export default SplashHeader;