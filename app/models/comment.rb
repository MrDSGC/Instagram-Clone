class Comment < ApplicationRecord

  validates :comment_author_id, :photo_id, :body, presence: true

  belongs_to :photo

  belongs_to :author,
  foreign_key: :comment_author_id,
  class_name: "User"
end
