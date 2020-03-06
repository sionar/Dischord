import React from 'react';
import { Link } from 'react-router-dom';
import SplashLogOutButton from './splash-log-out-button';

const SplashHeader = (props) => {
  return (
    <header id="splash-header-flex-container">
      <div id="splash-header-left-flexbox">
      <Link to="/">
        <img src={window.splashHeaderLogo} id="splash-header-logo"/>
        <img src={window.splashHeaderLabel} id="splash-header-label"/>
      </Link>
      </div>
      <div id="splash-header-right-flexbox">
        <a href="https://github.com/sionar">
          <img src={window.splashHeaderGithubLogo} id="splash-header-github-logo"/>
        </a>
          <Link to={props.loggedIn ? "/channels/@me" : "/login"}>
            <button className="splash-header-button">{props.loggedIn? "Open" : "Login"}</button>
          </Link>
          {props.loggedIn ? <SplashLogOutButton logout={props.logout}/> : null}
      </div>
    </header>  
  )
};

export default SplashHeader;