import { SET_DELETE_MESSAGE_ID } from '../actions/ui_actions';
import { CLOSE_MODAL } from '../actions/modal_actions';

export default (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_DELETE_MESSAGE_ID:
      return action.id;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
};