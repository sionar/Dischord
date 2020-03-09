import { connect } from 'react-redux';

import ChannelBar from './channel_bar';

const mapStateToProps = state => ({
  servers: Object.values(state.entities.servers)
});

export default connect(mapStateToProps, null)(ChannelBar);