import { RECEIVE_SERVER_KEYS, CREATE_SERVER_KEY } from '../actions/server_key_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { CREATE_SERVER, RECEIVE_DATA } from '../actions/server_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_SERVER_KEYS:
      return Object.assign(nextState, action.serverKeys);
    case CREATE_SERVER_KEY:
      return Object.assign(nextState, action.serverKey);
    case LOGOUT_CURRENT_USER:
      return {}
    case CREATE_SERVER:
      return Object.assign(nextState, action.payload.serverKeys)
    case RECEIVE_DATA:
      return action.payload.serverKeys;
    default:
      return state;
  }
};