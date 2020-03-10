import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import channelIdReducer from './channel_id_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  channelId: channelIdReducer
});

export default uiReducer;
