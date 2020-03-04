import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SplashDemoButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.loginUser({email: 'guestuser@dischord.com', password: 'password'})
    .then(result => this.props.history.push('/channels/@me'));
  }

  render() {
    return (
      this.props.loggedIn ?
        <Link to="/channels/@me"><button id="splash-demo-button" className="splash-button">Try the demo!</button></Link>
        :
        <button id="splash-demo-button" className="splash-button" onClick={this.handleClick}>Try the demo!</button>
    )
  }
}

export default withRouter(SplashDemoButton);