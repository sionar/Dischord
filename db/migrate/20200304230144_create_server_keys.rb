class CreateServerKeys < ActiveRecord::Migration[5.2]
  def change
    create_table :server_keys do |t|
      t.string :server_key, null: false, unique: true
      t.string :server_id, null: false
      t.timestamps
    end
    add_index :server_keys, :server_key
  end
end
