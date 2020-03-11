import { RECEIVE_DATA } from '../actions/server_actions';

export default (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DATA:
      return true;
    default:
      return state;
  }
};