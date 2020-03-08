import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import CreateServerForm from './create_server_form';

const mapStateToProps = state => ({
  errors: state.errors.serverErrors
});

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateServerForm);