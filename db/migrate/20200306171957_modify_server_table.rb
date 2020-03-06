class ModifyServerTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :servers, :name
  end
end
