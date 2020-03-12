import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Listener from './listener';
import { receiveMessage } from '../../actions/message_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.id,
  serverIds: Object.values(state.entities.subscriptions)
    .filter(subscription => subscription.userId === state.session.id)
    .map(subscription => subscription.serverId)
});

const mapDispatchToProps = (dispatch) => ({
  receiveMessage: (message) => dispatch(receiveMessage(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(Listener);
