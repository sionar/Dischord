class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.string :description
      t.integer :server_id, null: false
      t.timestamps
    end
    add_index :channels, :server_id
    add_index :channels, [:server_id, :name], unique: true
  end
end
