import { connect } from 'react-redux';

import ServerBar from './server_bar';
import { changeActiveChannel } from '../../../actions/server_actions';

const mapStateToProps = state => ({
  servers: Object.values(state.entities.servers)
});

const mapDispatchToProps = dispatch => ({
  changeActiveChannel: (data) => dispatch(changeActiveChannel(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerBar);