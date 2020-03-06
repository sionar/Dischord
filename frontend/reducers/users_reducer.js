import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_DATA } from '../actions/server_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_DATA:
      return action.payload.users
    case RECEIVE_USER:
      return Object.assign(nextState, action.user);
    case RECEIVE_CURRENT_USER:
      return Object.assign(nextState, action.currentUser);
    case LOGOUT_CURRENT_USER:
      return {}
    default:
      return state;
  }
}