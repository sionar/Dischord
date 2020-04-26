import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../../actions/modal_actions';
import { setDeleteMessageId } from '../../../actions/ui_actions';

import MessageActions from './message_actions';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.id,
  servers: state.entities.servers,
  message: ownProps.message
})

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  setDeleteMessageId: id => dispatch(setDeleteMessageId(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageActions));
