# == Schema Information
#
# Table name: channels
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string
#  server_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Channel < ApplicationRecord
  validates :name, :server_id, presence: true
  validates :name, uniqueness: { scope: :server_id}
  validates :description, length: { maximum: 1024 }, allow_blank: true

  belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server

  has_many :messages,
    foreign_key: :channel_id,
    class_name: :Message,
    dependent: :destroy
end
