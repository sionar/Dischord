export const CHANGE_ACTIVE_CHANNEL = 'CHANGE_ACTIVE_CHANNEL';
export const SET_EDIT_CHANNEL_ID = 'SET_EDIT_CHANNEL_ID';
export const SET_DELETE_MESSAGE_ID = 'SET_DELETE_MESSAGE_ID';
export const SET_EDIT_MESSAGE_ID = 'SET_EDIT_MESSAGE_ID';

export const changeActiveChannel = data => ({
  type: CHANGE_ACTIVE_CHANNEL,
  data
})

export const setEditChannelId = id => ({
  type: SET_EDIT_CHANNEL_ID,
  id
})

export const setDeleteMessageId = id => ({
  type: SET_DELETE_MESSAGE_ID,
  id
})

export const setEditMessageId = id => ({
  type: SET_EDIT_MESSAGE_ID,
  id
})