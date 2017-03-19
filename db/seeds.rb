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
  password: "asdfasdf",
  biography: "Aspiring photographer",
  profile_pic_url: "http://res.cloudinary.com/mrdsgc/image/upload/v1489707262/default_profile_picture_wxgufw.png")
User.create!(
  username: "Jennifer",
  password: "asdfasdf",
  biography: "Entrepreneur / Philanthropist",
  profile_pic_url: "")
User.create!(
  username: "Mark",
  password: "asdfasdf",
  biography: "Dancer | Explorer | Photographer",
  profile_pic_url: "")
User.create!(
  username: "John",
  password: "asdfasdf",
  biography: "Traveling the world!",
  profile_pic_url: "")
User.create!(
  username: "Mary",
  password: "asdfasdf",
  biography: "Actor, Blogger, Filmmaker and Photographer",
  profile_pic_url: "")
User.create!(
  username: "Michelle",
  password: "asdfasdf",
  biography: "Aspiring Entrepreneur",
  profile_pic_url: "")
User.create!(
  username: "Daniel",
  password: "asdfasdf",
  biography: "Software Engineer",
  profile_pic_url: "")
User.create!(
  username: "Candra",
  password: "asdfasdf",
  biography: "TravelBlogger",
  profile_pic_url: "")
User.create!(
  username: "Paul",
  password: "asdfasdf",
  biography: "Welcome to my profile! I take pictures for fun",
  profile_pic_url: "")
User.create!(
  username: "Leo",
  password: "asdfasdf",
  biography: "",
  profile_pic_url: "")
User.create!(
  username: "Andrew",
  password: "asdfasdf",
  biography: "",
  profile_pic_url: "")
User.create!(
  username: "Gage",
  password: "asdfasdf",
  biography: "",
  profile_pic_url: "")
User.create!(
  username: "Robert",
  password: "asdfasdf",
  biography: "",
  profile_pic_url: "")
User.create!(
  username: "Debra",
  password: "asdfasdf",
  biography: "",
  profile_pic_url: "")
User.create!(
  username: "Louis",
  password: "asdfasdf",
  biography: "",
  profile_pic_url: "")

Photo.delete_all


Photo.create!(
  img_url: "http://res.cloudinary.com/mrdsgc/image/upload/v1489785260/hmuc0cupcefqrzxrrwb2.png",
  caption: "random photo2",
  location: "random location2",
  poster_id: 1)
Photo.create!(
  img_url: "http://res.cloudinary.com/mrdsgc/image/upload/v1489785260/hmuc0cupcefqrzxrrwb2.png",
  caption: "random photo2",
  location: "random location2",
  poster_id: 1)
Photo.create!(
  img_url: "http://res.cloudinary.com/mrdsgc/image/upload/v1489785260/hmuc0cupcefqrzxrrwb2.png",
  caption: "random photo2",
  location: "random location2",
  poster_id: 1)
Photo.create!(
  img_url: "http://res.cloudinary.com/mrdsgc/image/upload/v1489785260/hmuc0cupcefqrzxrrwb2.png",
  caption: "random photo2",
  location: "random location2",
  poster_id: 1)
