import React from 'react';
import { Link } from 'react-router-dom';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        email: '',
        username: '',
        password: ''
      },
      emailLabel: 'EMAIL',
      usernameLabel: 'USERNAME',
      passwordLabel: 'PASSWORD'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFlag = false;
  }

  handleChange(field) {
    return e => this.setState({ user : {...this.state.user, [field]: e.target.value }});

  }

  handleSubmit(e) {
    e.preventDefault();
    const frontEndErrorsPassed = this.frontEndValidation();
    if (frontEndErrorsPassed)
      this.props.signupUser(this.state.user);
  }

  frontEndValidation() {
    let valid = true;
    let emailLabel = document.getElementById('register-form-label-email');
    let emailInput = document.getElementById('register-form-input-email');
    let usernameLabel = document.getElementById('register-form-label-username');
    let usernameInput = document.getElementById('register-form-input-username');
    let passwordLabel = document.getElementById('register-form-label-password');
    let passwordInput = document.getElementById('register-form-input-password');
    emailLabel.className = "register-label";
    emailInput.className = "register-input";
    usernameLabel.className = "register-label";
    usernameInput.className = "register-input";
    passwordLabel.className = "register-label";
    passwordInput.className = "register-input";

    if (!this.state.user.email) {
      valid = false;
      emailLabel.className = "register-label-error"
      emailInput.className = "register-input-error"
      this.setState({emailLabel : 'EMAIL - This field is required'})
    } else {
      this.setState({emailLabel : 'EMAIL'})
    }
  
    if (!this.state.user.username) {
      valid = false;
      usernameLabel.className = "register-label-error";
      usernameInput.className = "register-input-error"
      this.setState({usernameLabel : 'USERNAME - This field is required'})
    } else {
      this.setState({usernameLabel : 'USERNAME'})
    }

    if (!this.state.user.password) {
      valid = false;
      passwordLabel.className = "register-label-error";
      passwordInput.className = "register-input-error"
      this.setState({passwordLabel : 'PASSWORD - This field is required'})
    } else if (this.state.user.password.length < 6) {
      valid = false;
      passwordLabel.className = "register-label-error";
      passwordInput.className = "register-input-error"
      this.setState({passwordLabel : 'PASSWORD - Password must be at least 6 characters.'})
    } else {
      this.setState({passwordLabel : 'PASSWORD'})
    }
    return valid;
  }

  componentDidUpdate() {
    if (this.props.errors.length > 0 && (!this.updateFlag)) {
      this.updateFlag = true
      let emailLabel = document.getElementById('register-form-label-email');
      let emailInput = document.getElementById('register-form-input-email');
      let usernameLabel = document.getElementById('register-form-label-username');
      let usernameInput = document.getElementById('register-form-input-username');
      let passwordLabel = document.getElementById('register-form-label-password');
      let passwordInput = document.getElementById('register-form-input-password');
      emailLabel.className = "register-label-error";
      emailInput.className = "register-input-error";
      usernameLabel.className = "register-label";
      usernameInput.className = "register-input";
      passwordLabel.className = "register-label";
      passwordInput.className = "register-input";

      this.setState(
        { emailLabel: 'EMAIL - Email is already registered.',
          usernameLabel: 'USERNAME',
          passwordLabel : 'PASSWORD' });
    }
    else {
      this.updateFlag = false;
    }
  }

  render() {
    return (
      <form id="register-form" onSubmit={this.handleSubmit}>
        <div id="register-div-label">
          <h2 id="register-form-label">Create an account</h2>
        </div>
        <div id="register-div-inputs">
          <label className="register-label" id="register-form-label-email">{this.state.emailLabel}</label>
          <input className="register-input" id="register-form-input-email" onChange={this.handleChange("email")} type="text" value={this.state.email}/>              
          <label className="register-label" id="register-form-label-username">{this.state.usernameLabel}</label>
          <input className="register-input" id="register-form-input-username" onChange={this.handleChange("username")}  type="text" value={this.state.username}/>              
          <label className="register-label" id="register-form-label-password">{this.state.passwordLabel}</label>
          <input className="register-input" id="register-form-input-password" onChange={this.handleChange("password")}  type="password" value={this.state.password}/>              
          <input type="submit" id="register-form-submit-button" value="Continue"/>
        </div>
        <div id="register-div-bottom">
          <Link to="/register" id="register-div-bottom-link">
            <h3>Already have an account?</h3>
          </Link>
          <h4>By registering, you agree to Discord's <span>Terms of Service</span> and <span>Privacy Policy.</span></h4>
        </div>
      </form>
    )
  }
};

export default RegisterForm;