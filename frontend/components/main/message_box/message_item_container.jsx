import React from 'react';
import { connect } from 'react-redux';
import { setEditMessageId } from '../../../actions/ui_actions';
import { updateMessage } from '../../../actions/message_actions';


import MessageItem from './message_item';

const mapStateToProps = (state, ownProps) => ({
  users: state.entities.users,
  messages: state.entities.messages,
  channels: state.entities.channels,
  messageBlock: ownProps.messageBlock,
  errors: state.errors.messageErrors,
  editId: state.ui.editMessageId
});

const mapDispatchToProps = dispatch => ({
  setEditMessageId: id => dispatch(setEditMessageId(id)),
  updateMessage: (message, channel) => dispatch(updateMessage(message, channel))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageItem);