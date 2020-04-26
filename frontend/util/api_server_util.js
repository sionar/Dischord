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

export const updateServer = (formData, id) => (
  $.ajax({
    url: `api/servers/${id}`,
    method: 'PATCH',
    data: formData,
    contentType: false,
    processData: false 
  })
)

export const destroyServer = server => (
  $.ajax({
    url: `api/servers/${server.id}`,
    method: 'DELETE',
  })
)

