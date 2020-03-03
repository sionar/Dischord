import React from 'react';
import RegisterFormContainer from './register_form_container';

class Register extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.history.listen((location, action) => {
      console.log(action, location.pathname, location.state)
  });
  }

  render () {
    return (
      <section id="register-container">
        <img src="/assets/auth-background.jpg" id="auth-background"/>
        <div id="fade-box"></div>
        <RegisterFormContainer />
      </section>
    )
  }
}

export default Register