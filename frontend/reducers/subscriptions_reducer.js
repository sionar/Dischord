import { RECEIVE_SERVER_DATA } from '../actions/server_key_actions';
import { CREATE_SERVER, RECEIVE_DATA } from '../actions/server_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  
  switch (action.type) {
    case RECEIVE_SERVER_DATA:
      return action.payload.subscriptions;
    case CREATE_SERVER:
      return Object.assign(nextState, action.subscriptions);
    case RECEIVE_DATA:
      return action.payload.subscriptions;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}
