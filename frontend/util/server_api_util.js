export const getData = user_id => (
  $.ajax({
    url: `api/servers`,
    method: 'GET',
    data: user_id
  })
);

export const createServer = server => (
  $.ajax({
    url: `api/servers`,
    method: 'POST',
    data: { server }
  })
);

export const updateServer = server => (
  $.ajax({
    url: `api/server/${server.id}`,
    method: 'PATCH',
    data: { server }
  })
)

export const destroyServer = serverId => (
  $.ajax({
    url: `api/server/${server.id}`,
    method: 'DELETE',
  })
)
