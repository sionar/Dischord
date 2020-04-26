import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Listener from './listener';
import { receiveMessage, editMessage, deleteMessage } from '../../actions/message_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.id,
  serverIds: Object.values(state.entities.subscriptions)
    .filter(subscription => subscription.userId === state.session.id)
    .map(subscription => subscription.serverId),
});

const mapDispatchToProps = (dispatch) => ({
  receiveMessage: payload => dispatch(receiveMessage(payload)),
  editMessage: payload => dispatch(editMessage(payload)),
  deleteMessage: payload => dispatch(deleteMessage(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Listener);
