import React from 'react';
import { connect } from 'react-redux';

import MessageItem from './message_item';

const mapStateToProps = (state, ownProps) => ({
  users: state.entities.users,
  messageBlock: ownProps.messageBlock,
  errors: state.errors.messageErrors
});

const mapDispatchToProps = dispatch => ({ 
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageItem);