import * as UserUtil from '../util/api_user_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIEVE_USER_ERRORS = "RECEIEVE_USER_ERRORS";

export const receiveUser = user => ({
  type: RECEIVE__USER,
  user
});

export const receieveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const getUser = userId => UserUtil.getUser(userId)
  .then(res => dispatch(receiveData(res.entities.users)))
  .fail(res => dispatch(receiveServerErrors(res.responseJSON.errors.userErrors)));