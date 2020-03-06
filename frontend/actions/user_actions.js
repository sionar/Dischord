import * as UserUtil from '../util/api_user_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const getUser = userId => dispatch => UserUtil.getUser(userId)
  .then(res => dispatch(receiveData(res.entities.users)))
  .fail(res => dispatch(receiveUserErrors(res.responseJSON.errors.userErrors)));