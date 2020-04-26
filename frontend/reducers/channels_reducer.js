import { CREATE_CHANNEL, EDIT_CHANNEL, DELETE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_SERVER_DATA } from '../actions/server_key_actions';
import { RECEIVE_DATA, CREATE_SERVER, DELETE_SERVER } from '../actions/server_actions';
import { LEAVE_SERVER } from '../actions/subscription_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  let serverId, channelKeys;
  switch (action.type) {
    case CREATE_CHANNEL:
      return Object.assign(nextState, action.payload.channels);
    case EDIT_CHANNEL:
      return Object.assign(nextState, action.payload.channels);
    case DELETE_CHANNEL:
      const channelId = Object.keys(action.payload.channels)[0];
      delete nextState[channelId];
      return nextState;
    case RECEIVE_SERVER_DATA:
      return Object.assign(nextState, action.payload.channels);
    case RECEIVE_DATA:
      return Object.assign(nextState, action.payload.channels);
    case CREATE_SERVER:
      return Object.assign(nextState, action.payload.channels);
    case DELETE_SERVER:
      serverId = Number(Object.keys(action.payload.servers)[0]);
      channelKeys = Object.keys(nextState);
      for (let i = 0; i < channelKeys.length; i++) {
        if (nextState[channelKeys[i]].serverId === serverId)
          delete nextState[channelKeys[i]]; 
      }
      return nextState;
    case LEAVE_SERVER:
      serverId = Object.values(action.payload.subscriptions)[0].serverId;
      channelKeys = Object.keys(nextState);
      for (let i = 0; i < channelKeys.length; i++) {
        if (nextState[channelKeys[i]].serverId === serverId)
          delete nextState[channelKeys[i]]; 
      }
      return nextState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};