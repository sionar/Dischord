import React from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../../actions/session_actions'
import RegisterForm from './register_form'

const mapDispatchToProps = dispatch => ({
  signupUser: (user) => dispatch(signupUser(user))
});

export default connect(null, mapDispatchToProps)(RegisterForm);

