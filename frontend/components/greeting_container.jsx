import React from 'react';
import { connect } from 'react-redux';

import Greeting from './greeting';
import { logoutUser } from '../actions/session_actions';


const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
  processLogout: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);