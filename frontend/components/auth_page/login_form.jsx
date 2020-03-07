import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        email: '',
        password: ''
      },
      emailLabel: 'EMAIL',
      passwordLabel: 'PASSWORD'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.updateFlag = false;
  }

  handleChange(field) {
    return e => this.setState({ user : {...this.state.user, [field]: e.target.value }});
  }

  handleSubmit(e) {
    e.preventDefault();
    const frontEndErrorsPassed = this.frontEndValidation();
    if (frontEndErrorsPassed) {
      this.props.login(this.state.user);
    }
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.props.login({email: 'guestuser@dischord.com', password: 'password'})
  }

  frontEndValidation() {
    let valid = true;
    let emailLabel = document.getElementById('login-form-label-email');
    let emailInput = document.getElementById('login-form-input-email');
    let passwordLabel = document.getElementById('login-form-label-password');
    let passwordInput = document.getElementById('login-form-input-password');
    emailLabel.className = "login-label";
    emailInput.className = "login-input";
    passwordLabel.className = "login-label";
    passwordInput.className = "login-input";

    if (!this.state.user.email) {
      valid = false;
      emailLabel.className = "login-label-error"
      emailInput.className = "login-input-error"
      this.setState({emailLabel : 'EMAIL - This field is required'})
    } else {
      this.setState({emailLabel : 'EMAIL'})
    }
  
    if (!this.state.user.password) {
      valid = false;
      passwordLabel.className = "login-label-error";
      passwordInput.className = "login-input-error"
      this.setState({passwordLabel : 'PASSWORD - This field is required'})
    } else {
      this.setState({passwordLabel : 'PASSWORD'})
    }
    return valid;
  }
  
  componentDidUpdate() {
    if (this.props.errors.length > 0 && (!this.updateFlag)) {
      this.updateFlag = true
      let emailLabel = document.getElementById('login-form-label-email');
      let emailInput = document.getElementById('login-form-input-email');
      let passwordLabel = document.getElementById('login-form-label-password');
      let passwordInput = document.getElementById('login-form-input-password');
      if (this.props.errors[0] === "Password does not match.") {
        emailLabel.className = "login-label";
        emailInput.className = "login-input";
        passwordLabel.className = "login-label-error";
        passwordInput.className = "login-input-error"
        this.setState(
          {emailLabel: 'EMAIL', 
           passwordLabel : 'PASSWORD - Password does not match.'});
      } else {
        emailLabel.className = "login-label-error";
        emailInput.className = "login-input-error"
        passwordLabel.className = "login-label";
        passwordInput.className = "login-input";
        this.setState(
          {emailLabel : 'EMAIL - Email does not exist.',
          passwordLabel: 'PASSWORD'});
      }
    }
    else {
      this.updateFlag = false;
    }
  }

  render() {
    return (
      <form id="login-form" onSubmit={this.handleSubmit}>
        <div id="login-form-label">
          <h2 id="login-form-label">Welcome back!</h2>
          <h3 id="login-form-sublabel">We're so excited to see you again!</h3>
        </div>
        <div id="login-div-inputs">
          <label className="login-label" id="login-form-label-email">{this.state.emailLabel}</label>
          <input className="login-input" id="login-form-input-email" onChange={this.handleChange("email")} type="text" value={this.state.email}/>              
          <label className="login-label" id="login-form-label-password">{this.state.passwordLabel}</label>
          <input className="login-input" id="login-form-input-password"  onChange={this.handleChange("password")}  type="password" value={this.state.password}/>              
          <button onClick={this.handleDemoLogin} id="login-form-guest-button" type="button">Log in as a guest</button>
          <input type="submit" id="login-form-submit-button" value="Login"/>
        </div>
        <div id="login-div-bottom">
          <h4>Need an account?
            <Link to="/register" id="login-div-bottom-link"><span>Register</span></Link>
          </h4>
        </div>
      </form>
    )
  }
};

export default LoginForm;