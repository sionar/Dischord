import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions'
import RegisterForm from './register_form'

const mapStateToProps = (state) => ({
  errors: state.errors.sessionErrors,
})

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);

