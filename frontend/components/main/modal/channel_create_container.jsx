import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { makeChannel } from '../../../actions/channel_actions'
import ChannelCreate from './channel_create';

const mapStateToProps = state => ({
  errors: state.errors.channelErrors
});

const mapDispatchToProps = dispatch => ({ 
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  makeChannel: channel => dispatch(makeChannel(channel))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelCreate);