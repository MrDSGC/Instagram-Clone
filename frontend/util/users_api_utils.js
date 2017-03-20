export const getUser = (username) => {
  return $.ajax({
    method:"GET",
    url:`api/users/${username}`
  })
}
