import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Listener from './listener';
import { createMessage, editMessage, deleteMessage } from '../../actions/message_actions';
import { createChannel, editChannel, deleteChannel } from '../../actions/channel_actions';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.id,
  serverIds: Object.values(state.entities.subscriptions)
    .filter(subscription => subscription.userId === state.session.id)
    .map(subscription => subscription.serverId),
});

const mapDispatchToProps = (dispatch) => ({
  createMessage: payload => dispatch(createMessage(payload)),
  editMessage: payload => dispatch(editMessage(payload)),
  deleteMessage: payload => dispatch(deleteMessage(payload)),
  createChannel: payload => dispatch(createChannel(payload)),
  editChannel: payload => dispatch(editChannel(payload)),
  deleteChannel: payload => dispatch(deleteChannel(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Listener);
