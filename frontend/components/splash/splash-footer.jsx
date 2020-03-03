import React from 'react';
import { Link } from 'react-router-dom';

const SplashFooter = () => {
  return (
    <div id="splash-footer-flex-container">
      <ul id="splash-footer-links-container">
        <Link to="/">
          <img src="/assets/splash-header-logo.svg" id="splash-footer-logo"
          onClick={()=> document.documentElement.scrollTop = 0}/>
        </Link >
        <li>
          <ul className="splash-footer-links-ul">
            <li><h3>Product</h3></li>
            <li><p>Download</p></li>
            <li><p>Branding</p></li>
            <li><p>Nitro</p></li>
          </ul>
        </li>
        <li>
          <ul className="splash-footer-links-ul">
            <li><h3>Developers</h3></li>
            <li><p>Sell Your Game</p></li>
            <li><p>Rich Presence</p></li>
            <li><p>Verification</p></li>
            <li><p>Applications</p></li>
            <li><p>Documentation</p></li>
          </ul>
        </li>
        <li>
          <ul className="splash-footer-links-ul">
            <li><h3>Resources</h3></li>
            <li><p>Help &amp; Support</p></li>
            <li><p>Guidelines</p></li>
            <li><p>Feedback</p></li>
            <li><p>Terms</p></li>
            <li><p>Privacy</p></li>
            <li><p>Status</p></li>
          </ul>
        </li>
        <li>
          <ul className="splash-footer-links-ul">
            <li><h3>Company</h3></li>
            <li><p>About</p></li>
            <li><p>Blog</p></li>
            <li><p>Jobs</p></li>
          </ul>
        </li>
        <li>
          <ul className="splash-footer-links-ul">
            <li><h3>More</h3></li>
            <li><p>Partners</p></li>
            <li><p>Hypesquad</p></li>
            <li><p>Press Inquiries</p></li>
            <li><p>Open Source</p></li>
          </ul>
        </li>
      </ul>
      <ul id="splash-footer-signup-container">
        <div>
          <h2>Ready to try Discord? It's free!</h2>
          <h3>JOIN OVER 250 MILLION PLAYERS TODAY</h3>
        </div>
        <Link to="/register">
            <button id="splash-footer-signup-button">Sign Up Now</button>
        </Link>
      </ul>
      <img src="/assets/splash-footer-background.svg" id="splash-footer-background"></img>
    </div>
  )
};

export default SplashFooter;