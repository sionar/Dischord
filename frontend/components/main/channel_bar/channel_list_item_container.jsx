import { connect } from 'react-redux';

import ChannelListItem from './channel_list_item';
import { openModal } from '../../../actions/modal_actions';
import { setEditChannelId } from '../../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => ({
  channel: ownProps.channel,
  isOwner: ownProps.isOwner
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeActiveChannel: data => dispatch(ownProps.changeActiveChannel(data)),
  setEditChannelId: id => dispatch(setEditChannelId(id)),
  openModal: type => dispatch(openModal(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelListItem);