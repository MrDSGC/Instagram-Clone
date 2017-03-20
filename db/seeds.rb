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
# User.create!(
#   username: "Mark",
#   password: "asdfasdf",
#   biography: "Dancer | Explorer | Photographer",
#   profile_pic_url: "")
# User.create!(
#   username: "John",
#   password: "asdfasdf",
#   biography: "Traveling the world!",
#   profile_pic_url: "")
# User.create!(
#   username: "Mary",
#   password: "asdfasdf",
#   biography: "Actor, Blogger, Filmmaker and Photographer",
#   profile_pic_url: "")
# User.create!(
#   username: "Michelle",
#   password: "asdfasdf",
#   biography: "Aspiring Entrepreneur",
#   profile_pic_url: "")
# User.create!(
#   username: "Daniel",
#   password: "asdfasdf",
#   biography: "Software Engineer",
#   profile_pic_url: "")
# User.create!(
#   username: "Candra",
#   password: "asdfasdf",
#   biography: "TravelBlogger",
#   profile_pic_url: "")
# User.create!(
#   username: "Paul",
#   password: "asdfasdf",
#   biography: "Welcome to my profile! I take pictures for fun",
#   profile_pic_url: "")
# User.create!(
#   username: "Leo",
#   password: "asdfasdf",
#   biography: "",
#   profile_pic_url: "")
# User.create!(
#   username: "Andrew",
#   password: "asdfasdf",
#   biography: "",
#   profile_pic_url: "")
# User.create!(
#   username: "Gage",
#   password: "asdfasdf",
#   biography: "",
#   profile_pic_url: "")
# User.create!(
#   username: "Robert",
#   password: "asdfasdf",
#   biography: "",
#   profile_pic_url: "")
# User.create!(
#   username: "Debra",
#   password: "asdfasdf",
#   biography: "",
#   profile_pic_url: "")
# User.create!(
#   username: "Louis",
#   password: "asdfasdf",
#   biography: "",
#   profile_pic_url: "")

Photo.delete_all


Photo.create!(
  img_url: "http://res.cloudinary.com/mrdsgc/image/upload/v1489971902/2015-08-30_13.46.54_1063235873221112465_208634859_k3pxwd.jpg",
  caption: "Fun BaseballGame!",
  location: "Baseball Stadium",
  poster_id: 1)
Photo.create!(
  img_url: "http://res.cloudinary.com/mrdsgc/image/upload/v1489971908/2015-09-03_16.17.44_1066210892729545114_208634859_yvogbm.jpg",
  caption: "Hard at work",
  location: "Construction Site",
  poster_id: 1)
Photo.create!(
  img_url: "http://res.cloudinary.com/mrdsgc/image/upload/v1489971901/2015-09-04_18.31.29_1067002987669091303_208634859_tepwi7.jpg",
  caption: "Cool Blimp",
  location: "",
  poster_id: 1)
Photo.create!(
  img_url: "http://res.cloudinary.com/mrdsgc/image/upload/v1489971902/2015-09-09_20.17.07_1070680033205154463_208634859_fpvq2t.jpg",
  caption: "Pretty Reflection!",
  location: "",
  poster_id: 1)
Photo.create!(
  img_url: "http://res.cloudinary.com/mrdsgc/image/upload/v1489971902/2015-09-11_02.52.22_1071603741167973167_208634859_h3qolr.jpg",
  caption: "Night Skyline",
  location: "The City",
  poster_id: 1)
Photo.create!(
  img_url: "http://res.cloudinary.com/mrdsgc/image/upload/v1489971907/2015-09-12_16.46.37_1072748406021812659_208634859_dilzpf.jpg",
  caption: "",
  location: "Nature",
  poster_id: 1)
Photo.create!(
  img_url: "http://res.cloudinary.com/mrdsgc/image/upload/v1489971907/2015-09-15_18.58.35_1074989157845824329_208634859_olvgca.jpg",
  caption: "Nice outfits!",
  location: "South America",
  poster_id: 1)
Photo.create!(
  img_url: "http://res.cloudinary.com/mrdsgc/image/upload/v1489971908/2015-09-19_11.16.15_1077655559031485040_208634859_hmdd6x.jpg",
  caption: "Beautiful Sunrise",
  location: "",
  poster_id: 1)
Photo.create!(
  img_url: "http://res.cloudinary.com/mrdsgc/image/upload/v1489971906/2015-09-21_19.31.29_1079354374692270762_208634859_kzur8o.jpg",
  caption: "It's so windy",
  location: "",
  poster_id: 1)
Photo.create!(
  img_url: "http://res.cloudinary.com/mrdsgc/image/upload/v1489971908/2015-10-01_05.20.14_1086173681275367676_208634859_ffgzs3.jpg",
  caption: "Jetlag...",
  location: "Airport",
  poster_id: 1)
Photo.create!(
  img_url: "http://res.cloudinary.com/mrdsgc/image/upload/v1489971909/2015-10-14_05.50.07_1095610809835058049_208634859_zquinp.jpg",
  caption: "True Love",
  location: "",
  poster_id: 1)
Photo.create!(
  img_url: "http://res.cloudinary.com/mrdsgc/image/upload/v1489971914/2015-10-14_20.26.06_1096051704938099553_208634859_kp4fyb.jpg",
  caption: "Snack Time!",
  location: "",
  poster_id: 1)
Photo.create!(
  img_url: "http://res.cloudinary.com/mrdsgc/image/upload/v1489971913/2015-10-19_19.42.04_1099653415229452512_208634859_kdqpxu.jpg",
  caption: "Getting Cultured",
  location: "",
  poster_id: 1)
Photo.create!(
  img_url: "http://res.cloudinary.com/mrdsgc/image/upload/v1489971914/2015-10-22_16.17.55_1101724990405604241_208634859_blphjz.jpg",
  caption: "Bathtime!",
  location: "",
  poster_id: 1)
Photo.create!(
  img_url: "http://res.cloudinary.com/mrdsgc/image/upload/v1489971914/2015-10-23_08.52.06_1102225379773116650_208634859_euyuwa.jpg",
  caption: "",
  location: "",
  poster_id: 1)

#
# Photo.create!(
#   img_url: "",
#   caption: "",
#   location: "",
#   poster_id: 2)
