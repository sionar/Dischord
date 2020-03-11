import * as UserUtil from '../util/api_user_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const EDIT_USER = "EDIT_USER";

export const receiveUser = payload => ({
  type: RECEIVE_USER,
  payload
});

export const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const editUser = payload => ({
  type: EDIT_USER,
  payload
});

export const getUser = userId => dispatch => UserUtil.getUser(userId)
  .then(res => dispatch(receiveUser(res.entities)))
  .fail(res => dispatch(receiveUserErrors(res.responseJSON.errors.userErrors)));

export const updateUser = user => dispatch => UserUtil.updateUser(user)
  .then(res => dispatch(editUser(res.entities)))
  .fail(res => dispatch(receiveUserErrors(res.responseJSON.errors.userErrors)));

