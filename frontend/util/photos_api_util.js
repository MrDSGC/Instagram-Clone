export const getPhotos = (username) => {
  return $.ajax({
    method: "GET",
    url: `api/photos`,
    data: { username }
  });
};
// 
// export const getFeed = (username) => {
//   return $.ajax({
//     method:"GET",
//     url:`api/photos/${username}`
//   })
// }
