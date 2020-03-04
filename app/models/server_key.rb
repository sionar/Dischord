class ServerKey < ApplicationRecord
  validates :server_id, presence: true
  validates :server_key, presence: true, uniqueness: true

  belongs_to: :server,
    foreign_key: :server_id,
    class_name: :Server

end
