import { CREATE_CHANNEL, EDIT_CHANNEL, DELETE_CHANNEL, RECEIVE_CHANNEL_ERRORS } from '../actions/channel_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case CREATE_CHANNEL:
      return [];
    case EDIT_CHANNEL:
      return [];
    case DELETE_CHANNEL:
      return [];
    case RECEIVE_CHANNEL_ERRORS:
      return action.errors;    
    default:
      return state;
  }
};
