class Server < ApplicationRecord
  validates :name, presence: true, unique: true
  validates :owner_id, presence: true

  belongs_to :owner,
    foreign_key: :owner_id
    class_name: :User

  has_many :server_keys,
    foreign_key: :server_id,
    class_name: :ServerKey

end
