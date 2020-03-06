import { RECEIVE_DATA, CREATE_SERVER, EDIT_SERVER, DELETE_SERVER } from '../actions/server_actions';
import { RECEIVE_SERVER_DATA } from '../actions/server_key_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_DATA:
      return action.payload.servers;
    case CREATE_SERVER:
      return Object.assign(nextState, action.payload.servers);
    case EDIT_SERVER:
      return Object.assign(nextState, action.server);
    case DELETE_SERVER:
      delete nextState[action.server.id];
      return nextState;
    case RECEIVE_SERVER_DATA:
      return Object.assign(nextState, action.server);
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};