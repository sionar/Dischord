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

export const editServer = payload => ({
  type: EDIT_SERVER,
  payload
});

export const deleteServer = payload => ({
  type: DELETE_SERVER,
  payload
});



export const receiveServerErrors = (errors) => ({
  type: RECEIVE_SERVER_ERRORS,
  errors
});

export const getData = () => dispatch => ServerUtil.getData()
  .then(res => dispatch(receiveData(res.entities)))
  .fail(res => dispatch(receiveServerErrors(res.responseJSON.errors.serverErrors)));

export const makeServer = server => dispatch => ServerUtil.makeServer(server)
  .then(res => dispatch(createServer(res.entities)))
  .fail(res => dispatch(receiveServerErrors(res.responseJSON.errors.serverErrors)));

export const updateServer = (server, id) => dispatch => ServerUtil.updateServer(server, id)
  .then(res => dispatch(editServer(res.entities)))
  .fail(res => dispatch(receiveServerErrors(res.responseJSON.errors.serverErrors)));

export const destroyServer = server => dispatch => ServerUtil.destroyServer(server)
  .then((res) => dispatch(deleteServer(res.entities)))
  .fail(res => dispatch(receiveServerErrors(res.responseJSON.errors.serverErrors)));


  