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
  # after_initialize :ensure_image

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

  def ensure_image
    unless self.image.attached?
      file = open('https://dischord-seeds.s3-us-west-1.amazonaws.com/server-default-icon.png')
      self.image.attach(io: file, filename: 'server-default-icon.png')
    end
  end
end
