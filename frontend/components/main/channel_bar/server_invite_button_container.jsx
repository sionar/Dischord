import { connect } from 'react-redux';
import { openModal } from '../../../actions/modal_actions';

import ServerInviteButton from './server_invite_button';

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal('invite'))
});

export default connect(null, mapDispatchToProps)(ServerInviteButton);