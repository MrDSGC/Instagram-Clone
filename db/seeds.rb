# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all

User.create!(
  username: "guest",
  password: "guestpassword",
  biography: "Aspiring photographer",
  profile_pic_url: "assets/default_profile_picture.png")

Photo.delete_all


Photo.create!(
  img_url: "assets/default_profile_picture.png",
  caption: "random photo2",
  location: "random location2",
  poster_id: 1)
Photo.create!(
  img_url: "assets/default_profile_picture.png",
  caption: "random photo2",
  location: "random location2",
  poster_id: 1)
Photo.create!(
  img_url: "assets/default_profile_picture.png",
  caption: "random photo2",
  location: "random location2",
  poster_id: 1)
Photo.create!(
  img_url: "assets/default_profile_picture.png",
  caption: "random photo2",
  location: "random location2",
  poster_id: 1)
