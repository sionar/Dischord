export const getData = () => (
  $.ajax({
    url: `api/servers`,
    method: 'GET',
  })
);

export const makeServer = formData => (
  $.ajax({
    url: `api/servers`,
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
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
