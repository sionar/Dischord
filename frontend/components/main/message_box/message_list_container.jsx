import { connect } from 'react-redux';

import MessageList from './message_list';


const mapStateToProps = (state, ownProps) => {
  let messages = Object.values(state.entities.messages);
  messages = 
    messages.filter(message => Number(message.channelId) === Number(ownProps.match.params.channelId));

  return ({
    messages: messages,
    users: state.entities.users
  })
}

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
