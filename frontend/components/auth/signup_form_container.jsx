import React from 'react';
import { connect } from 'react-redux';

import SessionForm from './session_form';
 import { signupUser } from '../../actions/session_actions';


const mapStateToProps = (state) => ({
  errors: state.errors,
  formType: 'signup'
})

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signupUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);