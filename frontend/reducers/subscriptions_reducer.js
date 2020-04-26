import { RECEIVE_SERVER_DATA } from '../actions/server_key_actions';
import { CREATE_SERVER, RECEIVE_DATA, DELETE_SERVER, REMOVE_SERVER } from '../actions/server_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  let keys;
  
  switch (action.type) {
    case RECEIVE_SERVER_DATA:
      return Object.assign(nextState, action.payload.subscriptions);
    case CREATE_SERVER:
      return Object.assign(nextState, action.payload.subscriptions);
    case RECEIVE_DATA:
      return action.payload.subscriptions;
    case LOGOUT_CURRENT_USER:
      return {};
    case DELETE_SERVER:
      const serverId = Number(Object.keys(action.payload.servers)[0]);
      keys = Object.keys(nextState);
      keys.forEach(key => {
        if (nextState[key].serverId === serverId)
          delete nextState[key];
        })
      return nextState;
    case REMOVE_SERVER:
      keys = Object.keys(nextState);
      keys.forEach(key => {
        if (nextState[key].serverId === action.subscription.serverId)
          delete nextState[key];
        })
      return nextState;
    default:
      return state;
  }
}
