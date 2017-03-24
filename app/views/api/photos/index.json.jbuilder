

json.array! @photos do |photo|
  json.raw_age photo.raw_age
  json.img_url photo.img_url
  json.caption photo.caption
  json.poster photo.poster
  json.location photo.location
  json.age photo.age
  json.id photo.id
  json.like_count photo.like_count
  json.comments photo.comment_count
  json.comments_index photo.comments

  if photo.likers.include?(current_user)
    json.current_user_liked true
  else
    json.current_user_liked false
  end
end
