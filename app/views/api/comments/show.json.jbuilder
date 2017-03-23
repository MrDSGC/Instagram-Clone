json.extract! @comment, :comment_author_id, :photo_id, :id, :body
json.author @comment.author.username
