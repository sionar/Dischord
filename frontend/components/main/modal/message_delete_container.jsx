import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { destroyMessage } from '../../../actions/message_actions'
import MessageDelete from './message_delete';

const mapStateToProps = state => ({
  messages: state.entities.messages,
  channels: state.entities.channels,
  users: state.entities.users,
  id: state.ui.messageId,
  errors: state.errors.messageErrors
});

const mapDispatchToProps = dispatch => ({ 
  closeModal: () => dispatch(closeModal()),
  destroyMessage: (message, channel) => dispatch(destroyMessage(message, channel))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageDelete);