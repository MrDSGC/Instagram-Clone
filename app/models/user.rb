class User < ApplicationRecord

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 8, allow_nil: true}

  has_many :liked,
  foreign_key: :liker_id,
  class_name: "Like"

  has_many :comments,
  foreign_key: :comment_author_id,
  class_name: "Comment"

  has_many :photos,
  foreign_key: :poster_id,
  class_name: "Photo"

  has_many :followed_users, #different users followed by this user
  foreign_key: :follower_id,
  class_name: "Follow"

  has_many :users_following, #different users following this user
  foreign_key: :followed_id,
  class_name: "Follow"

  has_many :followers, #users that follow this user
  through: :users_following,
  source: :user_following

  has_many :following, #users that this user follow
  through: :followed_users,
  source: :user_followed


  has_many :feed_photos,
  through: :following,
  source: :photos

  has_many :feed_comments,
  through: :feed_photos,
  source: :comments
  attr_reader :password
  after_initialize :ensure_session_token


  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

end
