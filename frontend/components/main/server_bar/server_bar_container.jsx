import { connect } from 'react-redux';

import ServerBar from './server_bar';

const mapStateToProps = state => ({
  servers: Object.values(state.entities.servers)
});

export default connect(mapStateToProps, null)(ServerBar);