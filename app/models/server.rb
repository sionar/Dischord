# == Schema Information
#
# Table name: servers
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  owner_id   :integer          not null
#  private    :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'open-uri'

class Server < ApplicationRecord
  validates :name, presence: true
  validates :owner_id, presence: true
  after_initialize :ensure_image
  after_create :create_default_channels

  has_one_attached :image

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

  has_many :server_keys,
    foreign_key: :server_id,
    class_name: :ServerKey,
    dependent: :destroy

  has_many :subscriptions,
    foreign_key: :server_id,
    class_name: :Subscription,
    dependent: :destroy

  has_many :subscribed_users,
    through: :subscriptions,
    source: :user

  has_many :channels,
    foreign_key: :server_id,
    class_name: :Channel,
    dependent: :destroy
  
  has_many :messages,
    through: :channels,
    source: :messages


  private
  def ensure_image
    unless self.image.attached?
      file = open('https://dischord-seeds.s3-us-west-1.amazonaws.com/server-default-icon.png')
      self.image.attach(io: file, filename: 'server-default-icon.png')
    end
  end

  def create_default_channels
    Channel.create(name: 'announcements', description: 'Announcements for this server', server_id: self.id)
    Channel.create(name: 'general', description: 'General chat', server_id: self.id)
    Channel.create(name: 'off-topic', description: 'Anything unrelated to the main topic goes here.', server_id: self.id)
  end
end
