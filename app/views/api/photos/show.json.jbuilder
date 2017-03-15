json.photo do
  json.img_url @photo.img_url
  json.caption @photo.caption
  json.poster @photo.poster
  json.likers @photo.likers
  json.age @photo.age
  json.location @photo.location
  json.comments @photo.comments
end
