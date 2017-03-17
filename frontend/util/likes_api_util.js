export const postLike = (like) => {
  return $.ajax({
    method:"POST",
    url:`api/likes`,
    data: { like }
  });
}

export const deleteLike = (id) => {
  return $.ajax({
    method:"DELETE",
    url:`api/likes/${id}`
  });
};

export const getLikes = (photo_id) => {
  return $.ajax({
    method: "GET",
    url:`api/likes/`
  })
}
