export const getServerKeys = server_id => (
  $.ajax({
    url: `api/servers/${server_id}/server_keys`,
    method: 'GET',
  })
);

export const createServerKey = server_id => (
  $.ajax({
    url: `api/servers/${server_id}/server_keys`,
    method: 'POST',
  })
);

export const connectToServer = server_key => (

  $.ajax({
    url: `api/server_key/${server_key}`,
    method: 'GET'
  })
);