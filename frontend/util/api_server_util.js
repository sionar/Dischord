export const getData = () => (
  $.ajax({
    url: `api/servers`,
    method: 'GET',
  })
);

export const makeServer = server => (
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
