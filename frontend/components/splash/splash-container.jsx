import { connect } from 'react-redux';

import { logoutUser } from '../../actions/session_actions'
import Splash from './splash';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id)
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
