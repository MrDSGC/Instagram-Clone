class CreatePhotos < ActiveRecord::Migration[5.0]
  def change
    create_table :photos do |t|
      t.string :img_url, null: false
      t.string :caption
      t.string :location
      t.integer :poster_id, null:false
      t.boolean :current_user_liked
      t.timestamps
    end
    add_index :photos, :poster_id
  end

end
