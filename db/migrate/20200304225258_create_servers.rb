class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.string :name, unique: true, null: false
      t.integer :owner_id, null: false
      t.boolean :private
      t.timestamps
    end
    add_index :servers, :name
  end
end
