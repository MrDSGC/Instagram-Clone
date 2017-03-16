export const getPhotos = (username) => {
  return $.ajax({
    method: "GET",
    url: `api/photos`,
    data: { username }
  });
};

export const getPhoto = (id) => {
  return $.ajax({
    mrthod:"GET",
    url:`api/photo/${id}`
  });
};

export const postPhoto = (photo) => {
  return $.ajax({
    mrthod:"POST",
    url:`api/photos`
  });
}

export const deletePhoto = (id) => {
  return $.ajax({
    mrthod:"DELETE",
    url:`api/photos/${id}`
  });
};
