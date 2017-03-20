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
