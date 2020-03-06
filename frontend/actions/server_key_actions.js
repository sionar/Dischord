import * as ServerKeyUtil from '../util/api_server_key_util';

export const RECEIVE_SERVER_KEYS = "RECEIVE_SERVER_KEYS";
export const CREATE_SERVER_KEY = "CREATE_SERVER_KEY";
export const RECEIVE_SERVER_DATA = "RECEIVE_SERVER_DATA";
export const RECEIVE_SERVER_KEY_ERRORS = "RECEIVE_SERVER_KEY_ERRORS";

export const receiveServerKeys = serverKeys => ({
  type: RECEIVE_SERVER_KEYS,
  serverKeys
})

export const createServerKey = serverKey => ({
  type: CREATE_SERVER_KEY,
  serverKey
})

export const receiveServer = payload => ({
  type: RECEIVE_SERVER_DATA,
  payload
})

export const receieveServerKeyErrors = (errors) => ({
  type: RECEIVE_SERVER_KEY_ERRORS,
  errors
});

export const getKeys = serverId => ServerKeyUtil.getKeys(serverId)
  .then(res => dispatch(receiveServerKeys(res.entities.sessionKeys)))
  .fail(res => dispatch(receiveServerErrors(res.responseJSON.errors.serverKeyErrors)));

export const makeKey = serverId => ServerKeyUtil.makeKey(serverId)
  .then(res => dispatch(createServerKey(res.entities.sessionKeys)))
  .fail(res => dispatch(receiveServerErrors(res.responseJSON.errors.serverKeyErrors)));

export const getServer = serverKey => ServerKeyUtil.getServer(serverKey)
  .then(res => dispatch(createServerKey(res.entities)))
  .fail(res => dispatch(receiveServerErrors(res.responseJSON.errors.serverKeyErrors)));