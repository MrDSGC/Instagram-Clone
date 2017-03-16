json.array! @photos do |photo|
  json.img_url photo.img_url
  # json.likes photo.like_count
  # json.comments photo.comment_count
end
