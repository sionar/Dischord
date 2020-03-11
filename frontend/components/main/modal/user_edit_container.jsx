import { connect } from 'react-redux'; 

import UserEdit from './user_edit';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { updateUser } from '../../../actions/user_actions'

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({ 
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  updateUser: (user,id) => dispatch(updateUser(user,id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);