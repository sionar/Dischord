import { connect } from 'react-redux';

import ChannelList from './channel_list';
import { changeActiveChannel } from '../../../actions/channel_actions';

const mapStateToProps = state => ({
  channels: Object.values(state.entities.channels)
});

const mapDispatchToProps = dispatch => ({
  changeActiveChannel: data => dispatch(changeActiveChannel(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);