import { combineReducers } from 'redux';
import modalsReducer from './modals_reducer';
import channelIdsReducer from './channel_ids_reducer';
import loadingReducer from './loading_reducer'

const uiReducer = combineReducers({
  modal: modalsReducer,
  channelId: channelIdsReducer,
  doneLoading: loadingReducer
});

export default uiReducer;
