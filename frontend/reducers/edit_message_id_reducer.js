import { SET_EDIT_MESSAGE_ID } from '../actions/ui_actions';

export default (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_EDIT_MESSAGE_ID:
      return action.id;
    default:
      return state;
  }
};