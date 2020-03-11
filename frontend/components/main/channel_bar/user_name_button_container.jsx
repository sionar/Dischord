import { connect } from 'react-redux';

import UserNameButton from './user_name_button';
import { logout } from '../../../actions/session_actions';
import { openModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
  openModal: type => dispatch(openModal(type)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserNameButton);
