import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { updateChannel } from '../../../actions/channel_actions'
import ChannelEdit from './channel_edit';

const mapStateToProps = state => ({
  channels: state.entities.channels,
  channelId: state.ui.channelId,
  errors: state.errors.channelErrors
});

const mapDispatchToProps = dispatch => ({ 
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  updateChannel: channel => dispatch(updateChannel(channel))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelEdit);