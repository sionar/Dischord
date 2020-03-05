# == Schema Information
#
# Table name: subscribers
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  server_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class SubscriberTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
