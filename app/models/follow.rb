class Follow < ApplicationRecord
  validates :follower_id, :followed_id, presence: true

  belongs_to :user_following, # User who gives the follow
  foreign_key: :follower_id,
  class_name: "User"

  belongs_to :user_followed,  # User that receives the follow
  foreign_key: :followed_id,
  class_name: "User"

end
