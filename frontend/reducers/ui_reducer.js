import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import channelIdReducer from './channel_id_reducer';
import loadingReducer from './loading_reducer'

const uiReducer = combineReducers({
  modal: modalReducer,
  channelId: channelIdReducer,
  doneLoading: loadingReducer
});

export default uiReducer;
