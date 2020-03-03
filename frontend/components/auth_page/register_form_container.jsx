import React from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../../actions/session_actions'
import RegisterForm from './register_form'

const mapStateToProps = (state) => ({
  errors: state.errors,
})

const mapDispatchToProps = dispatch => ({
  signupUser: (user) => dispatch(signupUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);

