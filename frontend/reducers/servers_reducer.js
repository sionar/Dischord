import { RECEIVE_DATA, CREATE_SERVER, EDIT_SERVER, DELETE_SERVER} from '../actions/server_actions';
import { LEAVE_SERVER } from '../actions/subscription_actions';
import { RECEIVE_SERVER_DATA } from '../actions/server_key_actions';
import { CHANGE_ACTIVE_CHANNEL } from '../actions/ui_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  let serverId;
  switch (action.type) {
    case RECEIVE_DATA:
      return action.payload.servers;
    case CREATE_SERVER:
      return Object.assign(nextState, action.payload.servers);
    case EDIT_SERVER:
      return Object.assign(nextState, action.payload.servers);
    case DELETE_SERVER:
      serverId = Number(Object.keys(action.payload.servers)[0]);
      delete nextState[serverId];
      return nextState;
    case LEAVE_SERVER:
      serverId = Object.values(action.payload.subscriptions)[0].serverId;
      delete nextState[serverId];
      return nextState;
    case RECEIVE_SERVER_DATA:
      return Object.assign(nextState, action.payload.servers);
    case CHANGE_ACTIVE_CHANNEL:
      nextState[action.data.serverId].activeChannel = action.data.channelId;
      return nextState; 
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};