import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import ServerSelect from './server_select';

const mapStateToProps = state => ({
  errors: state.errors.serverErrors
});

const mapDispatchToProps = dispatch => ({ 
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerSelect);