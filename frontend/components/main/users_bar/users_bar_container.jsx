import { connect } from 'react-redux';

import UsersBar from './users_bar';

const mapStateToProps = state => ({
  users: state.entities.users,
  servers: state.entities.servers,
  subscriptions: state.entities.subscriptions
});

export default connect(mapStateToProps, null)(UsersBar);