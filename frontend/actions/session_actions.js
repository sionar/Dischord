import { signup, login, logout } from '../util/session_api_util';

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

export const loginUser = user => dispatch => login(user)
  .then(response => dispatch(receiveCurrentUser(response.entities.users[response.session.id])))
  .fail(response => dispatch(receiveSessionErrors(response.responseJSON.errors.sessionErrors)));

export const logoutUser = () => dispatch => logout()
  .then(() => dispatch(logoutCurrentUser()))
  .fail((response) => dispatch(receiveSessionErrors(response.responseJSON.errors.sessionErrors)));

export const signupUser = user => dispatch => signup(user)
  .then(response => dispatch(receiveCurrentUser(response.entities.users[response.session.id])))
  .fail((response) => dispatch(receiveSessionErrors(response.responseJSON.errors.sessionErrors)));