import { LEAVE_SERVER, RECEIVE_SUBSCRIPTION_ERRORS } from '../actions/subscription_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case LEAVE_SERVER:
      return [];
    case RECEIVE_SUBSCRIPTION_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
