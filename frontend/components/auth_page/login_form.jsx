import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        email: '',
        username: '',
        password: ''
      },
      emailLabel: 'EMAIL',
      passwordLabel: 'PASSWORD'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => this.setState(
      { user: { [field]: e.target.value } }
    );
  }

  frontEndValidation() {


  }

  handleSubmit(e) {
    e.preventDefault();
    const frontEndErrorsPassed = this.frontEndValidation();
    if (frontEndErrorsPassed)
      this.props.loginUser(this.state);
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
          <input className="login-input login-input-normal" onChange={this.handleChange("email")} type="text" value={this.state.email}/>              
          <label className="login-label" id="login-form-label-password">{this.state.passwordLabel}</label>
          <input className="login-input" id="login-form-input-password"  onChange={this.handleChange("password")}  type="password" value={this.state.password}/>              
          <h3>Forgot your password?</h3>
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