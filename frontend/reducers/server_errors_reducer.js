import { RECEIVE_DATA, CREATE_SERVER, EDIT_SERVER, DELETE_SERVER, RECEIVE_SERVER_ERRORS } from '../actions/server_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DATA:
      return [];
    case CREATE_SERVER:
      return [];
    case EDIT_SERVER:
      return [];
    case DELETE_SERVER:
      return [];
    case RECEIVE_SERVER_ERRORS:
      return action.errors;    
    default:
      return state;
  }
};
