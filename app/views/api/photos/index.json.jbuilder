json.array! @photos do |photo|
  json.img_url photo.img_url
  json.id photo.id
  # json.likes photo.like_count
  # json.comments photo.comment_count
end
