class Photo < ApplicationRecord
  validates :img_url, :poster_id, presence: true

  belongs_to: :poster,
  foreign_key: :poster_id,
  class_name: "User"

  
  #has_many :comments
  #has_many :likes

  def like_count
    self.likes.count
  end

  def comment_count
    self.comment.count
  end

  def feed
    #Photo.user.following.photos
  end

  def age
    age_days = (DateTime.now - self)
    age_weeks = (age_days / 7).round
    age_hours = (age_days * 24).round
    age_minutes = (age_hours * 60).round

    if age_minutes < 60
      return age_minutes
    elsif age_hours < 24
      return age_hours
    elsif  age_days < 7
      return age_days
    else
      return age_weeks
    end
  end

end