import React from 'react';
import { Link } from 'react-router-dom';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field) {
    return e => this.setState(
      {[field]: e.target.value }
    );
  }

  render() {
    return (
      <form id="register-form">
        <div id="register-div-label">
          <h2 id="register-form-label">Create an account</h2>
        </div>
        <div id="register-div-inputs">
          <label className="register-label" id="register-form-label-email">EMAIL</label>
          <input className="register-input" onChange={this.handleChange("email")} type="text" value={this.state.email}/>              
          <label className="register-label" id="register-form-label-username">USERNAME</label>
          <input className="register-input"  onChange={this.handleChange("username")}  type="text" value={this.state.username}/>              
          <label className="register-label" id="register-form-label-password">PASSWORD</label>
          <input className="register-input"  onChange={this.handleChange("password")}  type="password" value={this.state.password}/>              
          <input type="submit" id="register-form-submit-button" value="Continue"/>
        </div>
        <div id="register-div-bottom">
          <Link to="/login" id="register-div-bottom-link">
            <h3>Already have an account?</h3>
          </Link>
          <h4>By registering, you agree to Discord's <span>Terms of Service</span> and <span>Privacy Policy.</span></h4>
        </div>
      </form>
    )
  }
};

export default RegisterForm;