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

export const receiveServerData = payload => ({
  type: RECEIVE_SERVER_DATA,
  payload
})

export const receiveServerKeyErrors = (errors) => ({
  type: RECEIVE_SERVER_KEY_ERRORS,
  errors
});

export const getKeys = serverId => dispatch => ServerKeyUtil.getKeys(serverId)
  .then(res => dispatch(receiveServerKeys(res.entities.serverKeys)))
  .fail(res => dispatch(receiveServerKeyErrors(res.responseJSON.errors.serverKeyErrors)));

export const makeKey = serverId => dispatch => ServerKeyUtil.makeKey(serverId)
  .then(res => dispatch(createServerKey(res.entities.serverKeys)))
  .fail(res => dispatch(receiveServerKeyErrors(res.responseJSON.errors.serverKeyErrors)));

export const getServer = serverKey => dispatch => ServerKeyUtil.getServer(serverKey)
  .then(res => {
    console.log(res)
    dispatch(receiveServerData(res.entities))
  })
  .fail(res => dispatch(receiveServerKeyErrors(res.responseJSON.errors.serverKeyErrors)));