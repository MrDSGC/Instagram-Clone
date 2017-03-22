export const getUser = (username) => {
  return $.ajax({
    method:"GET",
    url:`api/users/${username}`
  })
}

export const getUsers = () => {
  return $.ajax({
    method: "GET",
    url: `api/users/`
  })
}

export const patchUser = (user) => {
  return $.ajax({
    method:"PATCH",
    url:`api/users/${user.id}`,
    data: {user}
  })
}
