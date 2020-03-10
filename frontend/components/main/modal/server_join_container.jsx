import React from 'react';
import { connect } from 'react-redux';

import { openModal, closeModal } from '../../../actions/modal_actions';
import { getServer } from '../../../actions/server_key_actions';
import ServerJoin from './server_join';

const mapStateToProps = state => ({
  errors: state.errors.serverKeyErrors
});

const mapDispatchToProps = dispatch => ({ 
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  getServer: (key) => dispatch(getServer(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerJoin);