import { connect } from 'react-redux';

import UserNameButton from './user_name_button';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id]
})

export default connect(mapStateToProps, null)(UserNameButton);
