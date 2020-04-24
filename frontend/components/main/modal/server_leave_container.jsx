import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { leaveServer } from '../../../actions/server_actions'
import ServerLeave from './server_leave';

const mapStateToProps = state => ({
  servers: state.entities.servers,
  subscriptions: state.entities.subscriptions,
  session: state.session,
  errors: state.errors.serverErrors
});

const mapDispatchToProps = dispatch => ({ 
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  leaveServer: server => dispatch(leaveServer(server))
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerLeave);