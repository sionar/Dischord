export const getUser = userId => (
  $.ajax({
    url: `api/users/${userId}`,
    method: 'GET',
  })
);

export const signup = user => (
  $.ajax({
    url: `api/users`,
    method: 'POST',
    data: { user }
  })
);