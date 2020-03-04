import React from 'react';
import RegisterFormContainer from './register_form_container';
import LoginFormContainer from './login_form_container';
import { Route, Switch } from 'react-router-dom'

class Register extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const fade = document.getElementById('fade-box')
    fade.addEventListener('animationstart', () => {
      fade.style.display = 'block'
    })
    fade.addEventListener('animationend', () => {
      fade.style.display = 'none'
    })
  }

  render () {
    return (
      <section id="auth-page-container">
        <img src={window.auth-background} id="auth-background"/>
        <div id="fade-box"></div>
        <nav id="auth-header">
          <img src="/assets/splash-header-logo.svg" id="auth-header-logo"/>
          <img src="/assets/splash-header-label.svg" id="auth-header-label"/>
        </nav>
        <Route path="/register">
          <RegisterFormContainer />
        </Route>          
        <Route path="/login">
          <LoginFormContainer />
        </Route>
      </section>
    )
  }
}

export default Register