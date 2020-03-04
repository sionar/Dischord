class AddIndexToSubscribers < ActiveRecord::Migration[5.2]
  def change
    add_index :subscribers, :server_id
  end
end
