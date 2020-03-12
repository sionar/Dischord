import { RECEIVE_MESSAGE, CREATE_MESSAGE, EDIT_MESSAGE, DELETE_MESSAGE } from '../actions/message_actions';
import { RECEIVE_SERVER_DATA } from '../actions/server_key_actions';
import { RECEIVE_DATA } from '../actions/server_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return Object.assign(nextState, action.payload.messages);
    case CREATE_MESSAGE:
      return Object.assign(nextState, action.payload.messages);
    case EDIT_MESSAGE:
      return Object.assign(nextState, action.payload.messages);
    case DELETE_MESSAGE:
      delete nextState[action.message.id];
      return nextState;
    case RECEIVE_SERVER_DATA:
      return Object.assign(nextState, action.payload.messages);   
    case RECEIVE_DATA:
      return Object.assign(nextState, action.payload.messages);
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};