import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import userErrorsReducer from './user_errors_reducer';
import serverKeyErrorsReducer from './server_keys_errors_reducer';
import serverErrorsReducer from './server_errors_reducer';
import channelErrorsReducer from './channel_errors_reducer';
import messageErrorsReducer from './message_errors_reducer';


const errorsReducer = combineReducers({
  sessionErrors: sessionErrorsReducer,
  userErrors: userErrorsReducer,
  serverKeyErrors: serverKeyErrorsReducer,
  serverErrors: serverErrorsReducer,
  channelErrors: channelErrorsReducer,
  messageErrors: messageErrorsReducer
});

export default errorsReducer;
