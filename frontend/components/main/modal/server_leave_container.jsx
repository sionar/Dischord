import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { removeServer } from '../../../actions/subscription_actions'
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
  removeServer: server => dispatch(removeServer(server))
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerLeave);