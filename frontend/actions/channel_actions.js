import * as ChannelUtil from '../util/api_channel_util';

export const CREATE_CHANNEL = 'CREATE_CHANNEL';
export const EDIT_CHANNEL = 'EDIT_CHANNEL';
export const DELETE_CHANNEL = 'DELETE_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';

export const createChannel = payload => ({
  type: CREATE_CHANNEL,
  payload
});

export const editChannel = payload => ({
  type: EDIT_CHANNEL,
  payload
});

export const deleteChannel = channel => ({
  type: DELETE_CHANNEL,
  channel
});

export const receiveChannelErrors = (errors) => ({
  type: RECEIVE_CHANNEL_ERRORS,
  errors
});

export const makeChannel = channel => dispatch => ChannelUtil.makeChannel(channel)
  .then(res => dispatch(createChannel(res.entities)))
  .fail(res => dispatch(receiveChannelErrors(res.responseJSON.errors.channelErrors)));

export const updateChannel = channel => dispatch => ChannelUtil.updateChannel(channel)
  .then(res => dispatch(editChannel(res.entities)))
  .fail(res => dispatch(receiveChannelErrors(res.responseJSON.errors.channelErrors)));

export const destroyChannel = channel => dispatch => ChannelUtil.destroyChannel(channel)
  .then(() => dispatch(deleteChannel(channel)))
  .fail(res => dispatch(receiveChannelErrors(res.responseJSON.errors.channelErrors)));
