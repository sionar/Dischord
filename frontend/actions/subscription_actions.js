import * as SubscriptionUtil from '../util/api_subscription_util';

export const LEAVE_SERVER = "LEAVE_SERVER";
export const RECEIVE_SUBSCRIPTION_ERRORS = "RECEIVE_SUBSCRIPTION_ERRORS";

export const leaveServer = subscription => ({
  type: LEAVE_SERVER,
  subscription
})

export const receiveSubscriptionErrors = (errors) => ({
  type: RECEIVE_SUBSCRIPTION_ERRORS,
  errors
});

export const removeServer = subscription => dispatch => SubscriptionUtil.leaveServer(subscription)
  .then(() => dispatch(leaveServer(subscription)))
  .fail(res => dispatch(receiveSubscriptionErrors(res.responseJSON.errors.subscriptionErrors)));

