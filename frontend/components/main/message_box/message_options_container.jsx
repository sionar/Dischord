import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../../actions/modal_actions';
import { setDeleteMessageId, setEditMessageId } from '../../../actions/ui_actions';

import MessageOptions from './message_options';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.id,
  servers: state.entities.servers,
  message: ownProps.message
})

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  setDeleteMessageId: id => dispatch(setDeleteMessageId(id)),
  setEditMessageId: id => dispatch(setEditMessageId(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageOptions));
