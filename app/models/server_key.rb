# == Schema Information
#
# Table name: server_keys
#
#  id         :bigint           not null, primary key
#  server_key :string           not null
#  server_id  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ServerKey < ApplicationRecord
  validates :server_id, presence: true
  validates :server_key, presence: true, uniqueness: true

  before_validation :ensure_session_key

  belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server
  
    
    def ensure_session_key
      alpha = ("a".."z").to_a
      unusedKey = false
      
      while (!unusedKey) do
        server_key = alpha.sample(6).join("")
        unusedKey = true if !ServerKey.find_by(server_key: server_key)
      end
      self.server_key = server_key
    end
end
