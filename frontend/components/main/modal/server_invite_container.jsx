import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../../../actions/modal_actions';
import ServerInvite from './server_invite';

const mapStateToProps = (state, ownProps) => ({
  servers: state.entities.servers,
  serverKeys: state.entities.serverKeys,
  errors: state.errors.serverKeyErrors
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerInvite);