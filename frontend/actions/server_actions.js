import * as ServerUtil from '../util/api_server_util';

export const RECEIVE_DATA = "RECEIVE_DATA";
export const CREATE_SERVER = "CREATE_SERVER";
export const EDIT_SERVER = "EDIT_SERVER";
export const DELETE_SERVER = "DELETE_SERVER";
export const RECEIVE_SERVER_ERRORS = "RECEIVE_SERVER_ERRORS";

export const receiveData = payload => ({
  type: RECEIVE_DATA,
  payload
});

export const createServer = payload => ({
  type: CREATE_SERVER,
  payload
});

export const editServer = server => ({
  type: EDIT_SERVER,
  server
});

export const deleteServer = server => ({
  type: DELETE_SERVER,
  server
});

export const receieveServerErrors = (errors) => ({
  type: RECEIVE_SERVER_ERRORS,
  errors
});


export const getData = userId => ServerUtil.getData(userId)
  .then(res => dispatch(receiveData(res.entities)))
  .fail(res => dispatch(receiveServerErrors(res.responseJSON.errors.serverErrors)));

export const makeServer = server => ServerUtil.makeServer(server)
  .then(res => dispatch(createServer(res.entities)))
  .fail(res => dispatch(receiveServerErrors(res.responseJSON.errors.serverErrors)));

export const updateServer = server => ServerUtil.updateServer(server)
  .then(res => dispatch(editServer(res.entities.servers)))
  .fail(res => dispatch(receiveServerErrors(res.responseJSON.errors.serverErrors)));

export const destroyServer = serverId => ServerUtil.updateServer(serverId)
  .then(res => dispatch(deleteServer(res.entities.servers)))
  .fail(res => dispatch(receiveServerErrors(res.responseJSON.errors.serverErrors)));
