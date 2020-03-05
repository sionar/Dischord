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
require 'test_helper'

class ServerKeyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
