import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions'
import Splash from './splash';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
