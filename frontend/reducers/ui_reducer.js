import { combineReducers } from 'redux';
import modalsReducer from './modals_reducer';
import channelIdReducer from './channel_id_reducer';
import messageIdReducer from './message_id_reducer';
import loadingReducer from './loading_reducer'

const uiReducer = combineReducers({
  modal: modalsReducer,
  channelId: channelIdReducer,
  messageId: messageIdReducer,
  doneLoading: loadingReducer
});

export default uiReducer;
