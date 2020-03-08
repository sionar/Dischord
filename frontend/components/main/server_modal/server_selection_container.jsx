import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import ServerSelection from './server_selection';

const mapStateToProps = state => ({
  errors: state.errors.serverErrors
});

const mapDispatchToProps = dispatch => ({ 
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerSelection);