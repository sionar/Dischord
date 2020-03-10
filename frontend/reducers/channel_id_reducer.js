import { SET_EDIT_CHANNEL_ID } from '../actions/channel_actions';

export default (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_EDIT_CHANNEL_ID:
      return action.id;
    default:
      return state;
  }
};