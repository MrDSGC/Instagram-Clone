class Like < ApplicationRecord

  validates :liker_id, :photo_id, presence: true

  belongs_to :photo

  belongs_to :liker,
  foreign_key: :liker_id,
  class_name: "User"
end
