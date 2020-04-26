export const leaveServer = subscription => (
  $.ajax({
    url: `api/subscriptions/${subscription.id}`,
    method: 'DELETE',
  })
)