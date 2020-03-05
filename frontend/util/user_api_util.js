export const getUser = user_id => (
  $.ajax({
    url: `api/users/${user_id}`,
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