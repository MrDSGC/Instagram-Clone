class Photo < ApplicationRecord
  validates :img_url, :poster_id, presence: true

  belongs_to :poster,
  foreign_key: :poster_id,
  class_name: "User"

  has_many :likes,
  class_name: "Like"

  has_many :likers,
  through: :likes,
  source: :liker

  has_many :comments,
  class_name: "Comment"

  def like_count
    self.likes.count
  end

  def like_count_minus_one
    if self.likes.count - 1 < 0
      0
    else
      self.likes.count - 1
    end
  end


  def comment_count
    self.comments.count
  end

  def age
    age_days = (DateTime.now - self.created_at.to_datetime)
    age_weeks = (age_days / 7).round
    age_hours = (age_days * 24).round
    age_minutes = (age_hours * 60).round

    if age_minutes < 60
      return "#{age_minutes} min"
    elsif age_hours < 24
      return "#{age_hours} hr"
    elsif  age_days < 7
      return "#{age_days.round} d"
    else
      return "#{age_weeks} w"
    end
  end

end
