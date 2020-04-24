import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { destroyServer } from '../../../actions/server_actions'
import ServerDelete from './server_delete';

const mapStateToProps = state => ({
  servers: state.entities.servers,
  errors: state.errors.serverErrors
});

const mapDispatchToProps = dispatch => ({ 
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  destroyServer: server => dispatch(destroyServer(server))
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerDelete);