# == Schema Information
#
# Table name: subscriptions
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  server_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Subscription < ApplicationRecord
  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server
end
