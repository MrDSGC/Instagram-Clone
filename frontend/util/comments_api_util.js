export const getComments = (photo_id) => {
  return $.ajax({
    method: "GET",
    url: `api/comments`,
    data: {photo_id}
  });
};

export const postComment = (comment) => {
  return $.ajax({
    method:"POST",
    url: `api/comments`,
    data: { comment }
  });
};

export const deleteComment = (photo_id, comment_id) => {
  return $.ajax({
    method:"DELETE",
    url:`api/comments/${comment_id}`,
    data: {photo_id: photo_id}
  });
};
