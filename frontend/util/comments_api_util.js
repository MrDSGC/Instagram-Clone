export const getComments = (photo_id) => {
  return $.ajax({
    method: "GET",
    url: `api/photos/${photo_id}/comments`
  });
};

export const postComment = (photo_id, comment) => {
  return $.ajax({
    method:"POST",
    url: `api/photos/${photo_id}/comments`,
    data: { comment }
  });
};

export const deleteComment = (photo_id, comment_id) => {
  return $.ajax({
    method:"DELETE",
    url:`api/photos/${photo_id}/comments/${comment_id}`
  });
};
