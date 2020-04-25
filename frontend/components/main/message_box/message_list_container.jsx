import { connect } from 'react-redux';

import MessageList from './message_list';


const mapStateToProps = (state, ownProps) => {
  let messages = Object.values(state.entities.messages);
  messages = messages.filter(message => Number(message.channelId) === Number(ownProps.match.params.channelId));
  let messageBlocks = [];
  let messageBlock = [];
  let prevUser = null;
  let currUser = null;
  let prevTime = messages.length > 0 ? moment(messages[0].createdAt) : null;
  let currTime;
  for (let i = 0; i < messages.length; i++ ) {
    currUser = messages[i].userId;
    currTime = moment(messages[i].createdAt);
    if ( prevUser != currUser || currTime.diff(prevTime, 'minutes') > 10) {
      prevUser = currUser;
      if (messageBlock.length > 0)
        messageBlocks.push(messageBlock);
      messageBlock = [ messages[i] ];
    } else {
      messageBlock.push(messages[i]);
    }
    prevTime = currTime;
  }
  messageBlocks.push(messageBlock);

  return ({
    messageBlocks: messageBlocks,
    users: state.entities.users
  })
}

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
