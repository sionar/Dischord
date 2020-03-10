export const makeChannel = channel => (
  $.ajax({
    url: `api/servers/${channel.serverId}/channels`,
    method: 'POST',
    data: channel
  })
);

export const updateChannel = channel => (
  $.ajax({
    url: `api/servers/${channel.serverId}/channels/${channel.id}`,
    method: 'PATCH',
    data: channel
  })
)

export const destroyChannel = channel => (
  $.ajax({
    url: `api/server/${channel.serverId}/channels/${channel.id}`,
    method: 'DELETE',
  })
)
