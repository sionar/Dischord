class AddContentTypeToChannel < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :content_type, :string, null: false
  end
end
