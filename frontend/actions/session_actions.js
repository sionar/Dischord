import * as SessionUtil from '../util/api_session_util';
import * as UserUtil from '../util/api_user_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const login = user => dispatch => SessionUtil.login(user)
  .then(res => dispatch(receiveCurrentUser(res.entities.users[res.session.id])))
  .fail(res => dispatch(receiveSessionErrors(res.responseJSON.errors.sessionErrors)));

export const logout = () => dispatch => SessionUtil.logout()
  .then(() => dispatch(logoutCurrentUser()))
  .fail((res) => dispatch(receiveSessionErrors(res.responseJSON.errors.sessionErrors)));

export const signup = user => dispatch => UserUtil.signup(user)
  .then(res => dispatch(receiveCurrentUser(res.entities.users[res.session.id])))
  .fail((res) => dispatch(receiveSessionErrors(res.responseJSON.errors.sessionErrors)));