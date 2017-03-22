export const getPhotos = (username) => {
  return $.ajax({
    method: "GET",
    url: `api/photos`,
    data: { username }
  });
};
