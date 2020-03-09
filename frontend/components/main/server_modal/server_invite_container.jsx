import React from 'react';
import { connect } from 'react-redux';

import { openModal, closeModal } from '../../../actions/modal_actions';
import { getServer } from '../../../actions/server_key_actions';
import ServerInvite from './server_invite';

const mapStateToProps = (state, ownProps) => ({
  serverKeys: state.entities.serverKeys,
  errors: state.errors.serverKeyErrors
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerJoin);