class Channel < ApplicationRecord
  validates :name, :server_id, presence: true
  validates :name, uniqueness: { scope: :server_id}

  belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server
end
