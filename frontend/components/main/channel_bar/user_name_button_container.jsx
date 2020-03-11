import { connect } from 'react-redux';

import UserNameButton from './user_name_button';
import { logout } from '../../../actions/session_actions';
import { updateUser } from '../../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
  updateUser: formData => dispatch(updateUser(formData)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserNameButton);
