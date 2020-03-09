import { connect } from 'react-redux';

import UsersBar from './users_bar';

const mapStateToProps = state => {
  debugger
  const servers = Object.keys(state.entities.servers);
  const subs = Object.values(state.entities.subscriptions);
  let users = {};
  let i = 0;
  let sub;
  for (i = 0; i < servers.length; i++) {
    users[servers[i]] = [];
  }
  for (i = 0; i < subs.length; i++) {
    sub = subs[i];
    users[sub.serverId].push(state.entities.users[sub.userId]);
  }
  return ({
    users: users
  })
};

export default connect(mapStateToProps, null)(UsersBar);