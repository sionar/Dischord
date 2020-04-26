import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Listener from './listener';
import { createMessage, editMessage, deleteMessage } from '../../actions/message_actions';
import { createChannel, editChannel, deleteChannel } from '../../actions/channel_actions';
import { editServer, deleteServer } from '../../actions/server_actions';
import { foreignLeaveServer } from '../../actions/subscription_actions';
import { receiveUser } from '../../actions/user_actions';

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
  deleteChannel: payload => dispatch(editChannel(payload)),
  editServer: payload => dispatch(editServer(payload)),
  deleteServer: payload => dispatch(deleteServer(payload)),
  foreignLeaveServer: payload => dispatch(foreignLeaveServer(payload)),
  receiveUser: payload => dispatch(receiveUser(payload))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Listener));
