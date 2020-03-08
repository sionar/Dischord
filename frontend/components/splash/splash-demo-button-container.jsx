import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SplashDemoButton from './splash-demo-button';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.id)
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashDemoButton);