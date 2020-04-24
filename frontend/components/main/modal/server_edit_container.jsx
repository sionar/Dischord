import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { updateServer } from '../../../actions/server_actions'
import ServerEdit from './server_edit';

const mapStateToProps = state => ({
  user: state.entities.users[state.session.id],
  servers: state.entities.servers,
  errors: state.errors.serverErrors
});

const mapDispatchToProps = dispatch => ({ 
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  updateServer: (formData, id) => dispatch(updateServer(formData, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerEdit);