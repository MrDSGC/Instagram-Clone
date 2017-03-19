class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :comment_author_id, null: false
      t.integer :photo_id, null: false

      t.timestamps
    end
  end
end
