export const getKeys = serverId => (
  $.ajax({
    url: `api/servers/${serverId}/server_keys`,
    method: 'GET',
  })
);

export const makeKey = serverId => (
  $.ajax({
    url: `api/servers/${serverId}/server_keys`,
    method: 'POST',
  })
);

export const getServer = serverKey => (
  $.ajax({
    url: `api/server_key/${serverKey}`,
    method: 'GET'
  })
);