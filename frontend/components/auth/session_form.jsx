import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    let formHeader, linkPath, linkLabel;
    let errorMessage = "";
    if (this.props.formType === 'signup') {
      formHeader = "Sign Up";
      linkPath = "/login";
      linkLabel = "Log in";
    } else {
      formHeader = "Log in";
      linkPath = "/signup";
      linkLabel = "Sign Up";
    }
    if (this.props.errors.session.length > 0) errorMessage = this.props.errors.session[0];
    return (
      <div className="session-form">
        <h2>{formHeader}</h2>
        <Link to={linkPath}>{linkLabel}</Link>
        <div>{errorMessage}</div>
        <form>
          <label>Username:
            <input type="text" value={this.state.username}
              onChange={this.handleInput('username')} />
          </label>
          <label>Password:
            <input type="password" value={this.state.password}
              onChange={this.handleInput('password')} />
          </label>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default SessionForm;