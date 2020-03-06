import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import serversReducer from './servers_reducer';
import serverKeysReducer from './server_keys_reducer';
import subscribersReducer from './subscribers_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversReducer,
  serverKeys: serverKeysReducer,
  subscribers: subscribersReducer
});

export default entitiesReducer;