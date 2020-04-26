import * as SubscriptionUtil from '../util/api_subscription_util';

export const LEAVE_SERVER = "LEAVE_SERVER";
export const FOREIGN_LEAVE_SERVER = "FOREIGN_LEAVE_SERVER";
export const RECEIVE_SUBSCRIPTION_ERRORS = "RECEIVE_SUBSCRIPTION_ERRORS";

export const leaveServer = payload => ({
  type: LEAVE_SERVER,
  payload
})

export const foreignLeaveServer = payload => ({
  type: FOREIGN_LEAVE_SERVER,
  payload
})

export const receiveSubscriptionErrors = (errors) => ({
  type: RECEIVE_SUBSCRIPTION_ERRORS,
  errors
});

export const removeServer = subscription => dispatch => SubscriptionUtil.leaveServer(subscription)
  .then((res) => dispatch(leaveServer(res.entities)))
  .fail(res => dispatch(receiveSubscriptionErrors(res.responseJSON.errors.subscriptionErrors)));
