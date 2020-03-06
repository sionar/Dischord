class ChangeSubscriberName < ActiveRecord::Migration[5.2]
  def change
    rename_table :subscribers, :subscriptions
  end
end
