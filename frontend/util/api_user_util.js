export const getUser = userId => (
  $.ajax({
    url: `api/users/${userId}`,
    method: 'GET',
  })
);

export const updateUser = formdata => (
  $.ajax({
    url: `api/users/${formdata.user.id}`,
    method: 'PATCH',
    data: formdata,
    contentType: false,
    processData: false
  })
);

export const signup = user => (
  $.ajax({
    url: `api/users`,
    method: 'POST',
    data: { user }
  })
);