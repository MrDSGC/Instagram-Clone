export const getPhoto = (id) => {
  return $.ajax({
    method:"GET",
    url:`api/photos/${id}`
  });
};

export const postPhoto = (photo) => {
  return $.ajax({
    method:"POST",
    url:`api/photos`,
    data: { photo }
  });
}

export const patchPhoto = (photo) => {
  return $.ajax({
    method: "PATCH",
    url:`api/photos/${photo.id}`,
    data: { photo }
  })
}

export const deletePhoto = (id) => {
  return $.ajax({
    method:"DELETE",
    url:`api/photos/${id}`
  });
};
