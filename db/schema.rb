# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170320234158) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.text     "body",              null: false
    t.integer  "comment_author_id", null: false
    t.integer  "photo_id",          null: false
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  create_table "follows", force: :cascade do |t|
    t.integer  "follower_id"
    t.integer  "followed_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["followed_id"], name: "index_follows_on_followed_id", using: :btree
    t.index ["follower_id"], name: "index_follows_on_follower_id", using: :btree
  end

  create_table "likes", force: :cascade do |t|
    t.integer  "liker_id",   null: false
    t.integer  "photo_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["liker_id"], name: "index_likes_on_liker_id", using: :btree
    t.index ["photo_id"], name: "index_likes_on_photo_id", using: :btree
  end

  create_table "photos", force: :cascade do |t|
    t.string   "img_url",                                            null: false
    t.string   "caption"
    t.string   "location"
    t.integer  "poster_id",                                          null: false
    t.boolean  "current_user_liked"
    t.datetime "raw_age",            default: '2017-03-24 00:20:44'
    t.datetime "created_at",                                         null: false
    t.datetime "updated_at",                                         null: false
    t.index ["poster_id"], name: "index_photos_on_poster_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "session_token",   null: false
    t.string   "password_digest", null: false
    t.string   "profile_pic_url"
    t.text     "biography"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
