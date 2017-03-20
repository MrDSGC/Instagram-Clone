json.array! @comments do |comment|
  json.comment_author_id comment.comment_author_id
  json.author comment.author
  json.photo_id comment.photo_id
  json.id comment.id
  json.body comment.body
end
