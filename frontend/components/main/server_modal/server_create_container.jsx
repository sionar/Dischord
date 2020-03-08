import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { makeServer } from '../../../actions/server_actions'
import ServerCreate from './server_create';

const mapStateToProps = state => ({
  user: state.entities.users[state.session.id],
  errors: state.errors.serverErrors
});

const mapDispatchToProps = dispatch => ({ 
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  makeServer: (server) => dispatch(makeServer(server))
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerCreate);