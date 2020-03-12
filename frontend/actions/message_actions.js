import * as MessageUtil from '../util/api_message_util';

export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const EDIT_MESSAGE = 'EDIT_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const RECEIVE_MESSAGE_ERRORS = 'RECEIVE_MESSAGE_ERRORS';

export const createMessage = payload => ({
  type: CREATE_MESSAGE,
  payload
});

export const editMessage = payload => ({
  type: EDIT_MESSAGE,
  payload
});

export const deleteMessage = message => ({
  type: DELETE_MESSAGE,
  message
});


export const receiveMessageErrors = (errors) => ({
  type: RECEIVE_MESSAGE_ERRORS,
  errors
});


export const makeMessage = (message, channel) => dispatch => MessageUtil.makeMessage(message, channel)
  .then(res => dispatch(createMessage(res.entities)))
  .fail(res => dispatch(receiveMessageErrors(res.responseJSON.errors.messageErrors)));

export const updateMessage = (message, channel) => dispatch => MessageUtil.updateMessage(message, channel)
  .then(res => dispatch(editMessage(res.entities)))
  .fail(res => dispatch(receiveMessageErrors(res.responseJSON.errors.messageErrors)));

export const destroyMessage = (message, channel) => dispatch => MessageUtil.destroyMessage(message, channel)
  .then(() => dispatch(deleteMessage(message)))
  .fail(res => dispatch(receiveMessageErrors(res.responseJSON.errors.messageErrors)));
