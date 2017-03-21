json.array! @photos do |photo|
  json.img_url photo.img_url
  json.caption photo.caption
  json.poster photo.poster
  json.location photo.location
  json.age photo.age
  json.id photo.id
  json.like_count_minus_one photo.like_count_minus_one

  if photo.likers.include?(current_user)
    json.current_user_liked true
  else
    json.current_user_liked false
  end
end
