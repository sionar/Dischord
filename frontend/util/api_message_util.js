export const makeMessage = (message, channel) => {
  return (
  $.ajax({
    url: `api/servers/${channel.serverId}/channels/${channel.id}/messages`,
    method: 'POST',
    data: message
  }))
};

export const updateMessage = (message, channel) => (
  $.ajax({
    url: `api/servers/${channel.serverId}/channels/${channel.id}/messages/${message.id}`,
    method: 'PATCH',
    data: message
  })
)

export const destroyMessage = (message, channel) => (
  $.ajax({
    url: `api/servers/${channel.serverId}/channels/${channel.id}/messages/${message.id}`,
    method: 'DELETE',
  })
)

