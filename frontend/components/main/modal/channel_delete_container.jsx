import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { destroyChannel } from '../../../actions/channel_actions'
import ChannelDelete from './channel_delete';

const mapStateToProps = state => ({
  channels: state.entities.channels,
  id: state.ui.channelId,
  errors: state.errors.channelErrors
});

const mapDispatchToProps = dispatch => ({ 
  closeModal: () => dispatch(closeModal()),
  destroyChannel: channel => dispatch(destroyChannel(channel))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelDelete);