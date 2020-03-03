import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.processLogout();
  }

  render() {
    let output;

    if (this.props.currentUser === undefined) {
      output =
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
    } else {
      output =
        <div>
          <h2>Welcome, {this.props.currentUser.username}!</h2>
          <button onClick={this.handleLogout}>Log out</button>
        </div>

    }
    return (
        output
    );
  }

}

export default Greeting;