import { connect } from 'react-redux';

import ServerNameDropdown from './server_name_dropdown';
import { openModal } from '../../../actions/modal_actions';
import { setEditChannelId } from '../../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => ({
  isOwner: ownProps.isOwner
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  openModal: type => dispatch(openModal(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerNameDropdown);