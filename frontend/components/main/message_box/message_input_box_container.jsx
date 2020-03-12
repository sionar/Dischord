import { connect } from 'react-redux';

import MessageInputBox from './message_input_box';
import { makeMessage } from '../../../actions/message_actions';


const mapStateToProps = (state, ownProps) => ({
  channel: state.entities.channels[ownProps.match.params.channelId]
})

const mapDispatchToProps = dispatch => ({
  makeMessage: (message, channel) => dispatch(makeMessage(message, channel))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageInputBox);
