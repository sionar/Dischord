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
class Server < ApplicationRecord
  validates :name, presence: true
  validates :owner_id, presence: true

  has_one_attached :server_image

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
end
