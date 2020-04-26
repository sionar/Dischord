import { connect } from 'react-redux';

import ChannelList from './channel_list';
import { changeActiveChannel } from '../../../actions/ui_actions';
import { openModal } from '../../../actions/modal_actions';

const mapStateToProps = state => ({
  channels: Object.values(state.entities.channels),
  servers: state.entities.servers,
  currentUserId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  changeActiveChannel: data => dispatch(changeActiveChannel(data)),
  openModal: data => dispatch(openModal(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);