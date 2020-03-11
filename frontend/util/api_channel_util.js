export const makeChannel = channel => {
  return (
  $.ajax({
    url: `api/servers/${channel.channel.serverId}/channels`,
    method: 'POST',
    data: channel
  }))
};

export const updateChannel = channel => (
  $.ajax({
    url: `api/servers/${channel.channel.serverId}/channels/${channel.channel.id}`,
    method: 'PATCH',
    data: channel
  })
)

export const destroyChannel = channel => {
  return (
  $.ajax({
    url: `api/servers/${channel.serverId}/channels/${channel.id}`,
    method: 'DELETE',
  })
  )
}
