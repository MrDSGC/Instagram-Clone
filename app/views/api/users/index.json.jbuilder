json.array! @users do |user|
  json.username user.username
  json.profile_pic_url user.profile_pic_url
end
