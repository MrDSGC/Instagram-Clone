
export const postFollow = (follow) => {
  return $.ajax({
    method:"POST",
    url:`api/follows`,
    data: { follow }
  });
}

export const deleteFollow = (followed_id) => {
  return $.ajax({
    method:"DELETE",
    url:`api/follows/${followed_id}`
  });
};


export const getFollow = (following_id) => {
  return $.ajax({
    method:"GET",
    url:`api/follows/${following_id}`
  })
}
