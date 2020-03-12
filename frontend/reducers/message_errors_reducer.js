import { RECEIVE_MESSAGE, CREATE_MESSAGE, EDIT_MESSAGE, DELETE_MESSAGE, RECEIVE_MESSAGE_ERRORS } from '../actions/message_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return [];
    case CREATE_MESSAGE:
      return [];
    case EDIT_MESSAGE:
      return [];
    case DELETE_MESSAGE:
      return [];
    case RECEIVE_MESSAGE_ERRORS:
      return action.errors;    
    default:
      return state;
  }
};
