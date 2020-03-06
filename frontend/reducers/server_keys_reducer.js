import { RECEIVE_SERVER_KEYS, CREATE_SERVER_KEY } from '../actions/server_key_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

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
    default:
      return state;
  }
};