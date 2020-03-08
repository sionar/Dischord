import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import ServerModal from './server_modal';

const mapStateToProps = state => ({
  modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerModal);
