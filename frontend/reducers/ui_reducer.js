import { combineReducers } from 'redux';
import modalsReducer from './modals_reducer';
import channelIdReducer from './channel_id_reducer';
import editMessageIdReducer from './edit_message_id_reducer';
import deleteMessageIdReducer from './delete_message_id_reducer';
import loadingReducer from './loading_reducer'

const uiReducer = combineReducers({
  modal: modalsReducer,
  channelId: channelIdReducer,
  editMessageId: editMessageIdReducer,
  deleteMessageId: deleteMessageIdReducer,
  doneLoading: loadingReducer
});

export default uiReducer;
