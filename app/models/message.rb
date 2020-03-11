# == Schema Information
#
# Table name: messages
#
#  id           :bigint           not null, primary key
#  user_id      :integer          not null
#  channel_id   :integer          not null
#  content      :text             not null
#  content_type :string           not null
#  edited       :boolean
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Message < ApplicationRecord
  validates :user_id, :channel_id, :content, :content_type, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :channel,
    foreign_key: :channel_id,
    class_name: :Channel
end
