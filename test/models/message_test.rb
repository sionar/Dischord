# == Schema Information
#
# Table name: messages
#
#  id           :bigint           not null, primary key
#  user_id      :integer          not null
#  channel_id   :integer          not null
#  content      :text             not null
#  edited       :boolean
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  content_type :string           not null
#
require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
