import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/session_actions'
import LoginForm from './login_form'

const mapStateToProps = (state) => ({
  errors: state.errors.sessionErrors,
})

const mapDispatchToProps = dispatch => ({
  loginUser: (user) => dispatch(loginUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

