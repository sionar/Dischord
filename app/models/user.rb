# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  username        :string           not null
#  usertag         :integer          not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'open-uri'

class User < ApplicationRecord

  attr_reader :password
  validates :email, presence: true, uniqueness: true
  validates :username, presence: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  before_validation :ensure_session_token
  after_initialize :ensure_image, :ensure_usertag

  has_one_attached :image
  

  has_many :owned_servers,
    foreign_key: :owner_id,
    class_name: :Server

  has_many :subscriptions,
    foreign_key: :user_id,
    class_name: :Subscription

  has_many :subscribed_servers,
    through: :subscriptions,
    source: :server

  has_many :messages,
    foreign_key: :user_id,
    class_name: :Message

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def ensure_usertag
    return if self.usertag

    already_taken = true
    while already_taken do
      usertag = rand(1000..9999)
      already_taken = false unless User.find_by(username: self.username, usertag: usertag) 
    end
    self.usertag = usertag
  end

  def ensure_image
    unless self.image.attached?
      file = open('https://dischord-seeds.s3-us-west-1.amazonaws.com/default-avatar.png')
      self.image.attach(io: file, filename: 'server-default-icon.png')
    end
  end
end
