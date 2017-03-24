class Users < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :session_token, null: false
      t.string :password_digest, null: false
      t.string :profile_pic_url, default: "http://res.cloudinary.com/mrdsgc/image/upload/v1489707262/seedfiles/default_profile_picture_wxgufw.png"
      t.text :biography

      t.timestamps
    end
  end
end
