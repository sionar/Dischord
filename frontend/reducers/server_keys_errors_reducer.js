import { RECEIVE_SERVER_KEYS, CREATE_SERVER_KEY, RECEIVE_SERVER_DATA, RECEIVE_SERVER_KEY_ERRORS } from '../actions/server_key_actions';
import { CLOSE_MODAL } from '../actions/modal_actions'

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SERVER_KEYS:
      return [];
    case CREATE_SERVER_KEY:
      return [];
    case RECEIVE_SERVER_DATA:
      return [];
    case RECEIVE_SERVER_KEY_ERRORS:
      return action.errors;
    case CLOSE_MODAL:
      return [];
    default:
      return state;
  }
};
