# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Like.delete_all
Follow.delete_all
Comment.delete_all
Photo.delete_all

User.create!(
  username: "Guest",
  password: "asdfasdf",
  biography: "Aspiring photographer",
  profile_pic_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1490209047/seedfiles/bd7797d867ff2e38ea588af3000b95e9.jpg")

User.create!(
  username: "Jennifer",
  password: "asdfasdf",
  biography: "Entrepreneur",
  profile_pic_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489994850/seedfiles/2017-03-18_11.01.50_1473375854809923893_303969136_oihton.jpg")

User.create!(
  username: "Mark",
  password: "asdfasdf",
  biography: "Explorer",
  profile_pic_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489995347/seedfiles/used2_tkjw4x.jpg")

User.create!(
  username: "John",
  password: "asdfasdf",
  biography: "Traveling the world!",
  profile_pic_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489995672/seedfiles/used3.jpg")

User.create!(
  username: "Mary",
  password: "asdfasdf",
  biography: "Actor, Blogger, Filmmaker and Photographer",
  profile_pic_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489996449/seedfiles/2015-06-14_21.23.41_1007658048698496998_2086833884.jpg")

User.create!(
  username: "Michelle",
  password: "asdfasdf",
  biography: "Aspiring Entrepreneur",
  profile_pic_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489996627/seedfiles/2015-05-25_13.57.41_992938050805609601_2086833884.jpg")

User.create!(
  username: "Daniel",
  password: "asdfasdf",
  biography: "Software Engineer",
  profile_pic_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997016/seedfiles/2015-05-22_22.26.55_991020027454731769_2086833884.jpg")

  User.create!(
  username: "Paul",
  password: "asdfasdf",
  biography: "Welcome to my profile! I take pictures for fun",
  profile_pic_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997300/seedfiles/2015-05-21_01.14.00_989654572995491529_2086833884.jpg")

  User.create!(
  username: "Leo",
  password: "asdfasdf",
  biography: "Philanthropist",
  profile_pic_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997544/seedfiles/2015-05-17_07.30.45_986945092692260061_2086833884.jpg")

User.create!(
  username: "Candra",
  password: "asdfasdf",
  biography: "TravelBlogger",
  profile_pic_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997802/seedfiles/2015-05-11_13.27.58_982776238940403312_2086833884.jpg")

  User.create!(
  username: "Debra",
  password: "asdfasdf",
  biography: "Check out my pics!",
  profile_pic_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998140/seedfiles/2015-05-02_22.47.50_976535045877315076_2086833884.jpg")

User.create!(
  username: "Angela",
  password: "asdfasdf",
  biography: "Dancer",
  profile_pic_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998370/seedfiles/2015-05-04_23.36.55_978009299080754698_2086833884.jpg")

User.create!(
  username: "Tina",
  password: "asdfasdf",
  biography: "",
  profile_pic_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998586/seedfiles/6767cb763f747099c99835dd583f06ac.jpg")

User.create!(
  username: "Sarah",
  password: "asdfasdf",
  biography: "Just bought a new DSLR",
  profile_pic_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998818/seedfiles/C7BHG94V4AEvjV_.jpg")

User.create!(
  username: "Linda",
  password: "asdfasdf",
  biography: "I love taking Photos!",
  profile_pic_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998936/seedfiles/portrait-sigma-50mm-f14-hsm-canon-eos-5d-mk2-face-Favimcom-473053_zpsd55e8d8e.jpg")

User.create!(
  username: "Gage",
  password: "asdfasdf",
  biography: "Moonlighting as a Baller",
  profile_pic_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489999124/seedfiles/Portrait-Photography-Next-Level-04.jpg")

User.create!(
  username: "Janine",
  password: "asdfasdf",
  biography: "Professional Photographer",
  profile_pic_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1490286130/seedfiles/2015-09-11_13.06.59_1071913092494701581_2086833884.jpg")




Photo.create!(
  img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489971902/seedfiles/2015-08-30_13.46.54_1063235873221112465_208634859_k3pxwd.jpg",
  caption: "Fun BaseballGame!",
  location: "Baseball Stadium",
  poster_id: 1)

Photo.create!(
  img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489971908/seedfiles/2015-09-03_16.17.44_1066210892729545114_208634859_yvogbm.jpg",
  caption: "Hard at work",
  location: "Construction Site",
  poster_id: 1)

Photo.create!(
  img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489971901/seedfiles/2015-09-04_18.31.29_1067002987669091303_208634859_tepwi7.jpg",
  caption: "Cool Blimp",
  location: "",
  poster_id: 1)

Photo.create!(
  img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489971902/seedfiles/2015-09-09_20.17.07_1070680033205154463_208634859_fpvq2t.jpg",
  caption: "Pretty Reflection!",
  location: "",
  poster_id: 1)

Photo.create!(
  img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489971902/seedfiles/2015-09-11_02.52.22_1071603741167973167_208634859_h3qolr.jpg",
  caption: "Night Skyline",
  location: "The City",
  poster_id: 1)

Photo.create!(
  img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489971907/seedfiles/2015-09-12_16.46.37_1072748406021812659_208634859_dilzpf.jpg",
  caption: "",
  location: "Nature",
  poster_id: 1)

Photo.create!(
  img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489971907/seedfiles/2015-09-15_18.58.35_1074989157845824329_208634859_olvgca.jpg",
  caption: "Nice outfits!",
  location: "South America",
  poster_id: 1)

Photo.create!(
  img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489971908/seedfiles/2015-09-19_11.16.15_1077655559031485040_208634859_hmdd6x.jpg",
  caption: "Beautiful Sunrise",
  location: "",
  poster_id: 1)

Photo.create!(
  img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489971906/seedfiles/2015-09-21_19.31.29_1079354374692270762_208634859_kzur8o.jpg",
  caption: "It's so windy",
  location: "",
  poster_id: 1)

Photo.create!(
  img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489971908/seedfiles/2015-10-01_05.20.14_1086173681275367676_208634859_ffgzs3.jpg",
  caption: "Jetlag...",
  location: "Airport",
  poster_id: 1)

Photo.create!(
  img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489971909/seedfiles/2015-10-14_05.50.07_1095610809835058049_208634859_zquinp.jpg",
  caption: "True Love",
  location: "",
  poster_id: 1)

Photo.create!(
  img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489971914/seedfiles/2015-10-14_20.26.06_1096051704938099553_208634859_kp4fyb.jpg",
  caption: "Snack Time!",
  location: "",
  poster_id: 1)

Photo.create!(
  img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489971913/seedfiles/2015-10-19_19.42.04_1099653415229452512_208634859_kdqpxu.jpg",
  caption: "Getting Cultured",
  location: "",
  poster_id: 1)

Photo.create!(
  img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489971914/seedfiles/2015-10-22_16.17.55_1101724990405604241_208634859_blphjz.jpg",
  caption: "Bathtime!",
  location: "",
  poster_id: 1)

Photo.create!(
  img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489995038/seedfiles/2016-08-28_08.16.40_1326888021454322832_208634859_n4p77b.jpg",
  caption: "Ballerina",
  location: "London",
  poster_id: 2)

Photo.create!(
  img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489995038/seedfiles/2016-08-26_17.16.42_1325710277551033353_208634859_owfv2p.jpg",
  caption: "Full of hot air!",
  location: "sky",
  poster_id: 2)

Photo.create!(
  img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997545/seedfiles/2016-06-02_05.19.44_1263743485422071837_208634859.jpg",
  caption: "Quick snap of the moon",
  location: "",
  poster_id: 2)

Photo.create!(
  img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489995692/seedfiles/2017-02-09_18.02.43_1446801185813956307_208634859.jpg",
  caption: "Best buds",
  location: "",
  poster_id: 2)

Photo.create!(
  img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489995373/seedfiles/2017-03-13_23.39.17_1470133208674568317_208634859_o6c0mv.jpg",
  caption: "So cute!",
  location: "",
  poster_id: 2)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489995373/seedfiles/2017-03-07_15.56.35_1465581872549415327_208634859_xvf36z.jpg",
    caption: "So many colors",
    location: "India",
    poster_id: 3)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489995373/seedfiles/2017-03-11_04.13.09_1468126929181610620_208634859_amlxsn.jpg",
    caption: "Helicopter shot",
    location: "",
    poster_id: 3)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489995372/seedfiles/2017-03-04_01.24.09_1462968438997628333_208634859_fiv3xx.jpg",
    caption: "Nice night out",
    location: "",
    poster_id: 3)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489995692/seedfiles/2017-02-16_16.19.14_1451822533615348316_208634859.jpg",
    caption: "Elephant Rider!",
    location: "Thailand",
    poster_id: 3)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489995373/seedfiles/2017-03-18_04.37.51_1473182586205123698_208634859_wi0itn.jpg",
    caption: "Fun with fireworks",
    location: "",
    poster_id: 3)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489995692/seedfiles/2017-02-16_16.19.14_1451822533615348316_208634859.jpg",
    caption: "Nice waterfall",
    location: "",
    poster_id: 4)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489995692/seedfiles/2017-02-11_01.55.01_1447763680334668833_208634859.jpg",
    caption: "peaceful monk",
    location: "Nepal",
    poster_id: 4)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489995692/seedfiles/2017-02-09_18.02.43_1446801185813956307_208634859.jpg",
    caption: "Creaky bridge",
    location: "",
    poster_id: 4)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489995691/seedfiles/2017-02-07_18.11.33_1445356080908720072_208634859.jpg",
    caption: "Room for one more?",
    location: "",
    poster_id: 4)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489995690/seedfiles/2017-02-06_15.30.05_1444550037005737452_208634859.jpg",
    caption: "Sunset",
    location: "",
    poster_id: 4)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489996452/seedfiles/2017-01-28_01.17.57_1437598162238858486_208634859.jpg",
    caption: "Pretty in Pink",
    location: "",
    poster_id: 5)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489996451/seedfiles/2017-01-21_11.25.10_1432830354242345870_208634859.jpg",
    caption: "Political protest",
    location: "",
    poster_id: 5)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489996450/seedfiles/2017-01-26_16.54.46_1436620130170736474_208634859.jpg",
    caption: "Gone swimming",
    location: "",
    poster_id: 5)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489996451/seedfiles/2017-01-22_09.43.13_1433503817764179804_208634859.jpg",
    caption: "",
    location: "",
    poster_id: 5)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489996452/seedfiles/2017-01-07_12.55.01_1422728715531612290_208634859.jpg",
    caption: "Best friends sled together",
    location: "",
    poster_id: 5)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489996630/seedfiles/2016-10-16_15.01.29_1362605788971043754_208634859.jpg",
    caption: "Autum is here!",
    location: "",
    poster_id: 6)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489996628/seedfiles/2016-10-18_16.48.48_1364109354151797507_208634859.jpg",
    caption: "Congrats!!",
    location: "",
    poster_id: 6)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489996631/seedfiles/2016-10-26_06.36.37_1369599432320035672_208634859.jpg",
    caption: "Icy plains",
    location: "",
    poster_id: 6)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489996630/seedfiles/2016-11-26_10.08.59_1392204572742725022_208634859.jpg",
    caption: "nice mural",
    location: "Cuba",
    poster_id: 6)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489996630/seedfiles/2016-11-16_02.48.27_1384735087953756987_208634859.jpg",
    caption: "pretty leaf",
    location: "",
    poster_id: 6)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489996627/seedfiles/2016-11-04_09.32.39_1376211015879910770_208634859.jpg",
    caption: "",
    location: "",
    poster_id: 6)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489996630/seedfiles/2016-11-09_03.29.50_1379682486833110643_208634859.jpg",
    caption: "What a view!",
    location: "",
    poster_id: 6)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489996628/seedfiles/2016-10-20_14.05.58_1365476945340580292_208634859.jpg",
    caption: "Beautiful painting",
    location: "",
    poster_id: 6)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997017/seedfiles/2016-09-07_23.08.49_1334584816305261781_208634859.jpg",
    caption: "Eagle and his friend",
    location: "",
    poster_id: 7)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997016/seedfiles/2016-09-05_23.04.29_1333133086506067136_208634859.jpg",
    caption: "On a journey",
    location: "Sahara",
    poster_id: 7)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997017/seedfiles/2016-09-10_17.03.12_1336575119442672958_208634859.jpg",
    caption: "Nightlights!!",
    location: "",
    poster_id: 7)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997017/seedfiles/2016-09-21_06.32.56_1344230431813495273_208634859.jpg",
    caption: "Space is so wonderous",
    location: "",
    poster_id: 7)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997017/seedfiles/2016-09-02_06.50.05_1330468328757775720_208634859.jpg",
    caption: "Ready for school",
    location: "",
    poster_id: 7)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997017/seedfiles/2016-09-24_06.12.27_1346394451337212621_208634859.jpg",
    caption: "Fashionably late",
    location: "New York",
    poster_id: 7)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997017/seedfiles/2016-09-24_06.12.27_1346394451337212621_208634859.jpg",
    caption: "",
    location: "",
    poster_id: 7)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997018/seedfiles/2016-09-25_12.56.03_1347322363561221261_208634859.jpg",
    caption: "Nice ride",
    location: "",
    poster_id: 7)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997298/seedfiles/2015-07-29_19.25.00_1040213219706925756_208634859.jpg",
    caption: "Statue close-up",
    location: "",
    poster_id: 8)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997299/seedfiles/2016-08-16_17.42.45_1318475635659700763_208634859.jpg",
    caption: "Say Cheese!",
    location: "",
    poster_id: 8)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997302/seedfiles/2016-08-03_15.19.04_1308981230062099027_208634859.jpg",
    caption: "",
    location: "",
    poster_id: 8)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997299/seedfiles/2016-07-29_07.48.39_1305130650759657200_208634859.jpg",
    caption: "Sweet Castle",
    location: "",
    poster_id: 8)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997300/seedfiles/2016-07-23_10.47.54_1300872219198504809_208634859.jpg",
    caption: "Working hard!",
    location: "",
    poster_id: 8)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997298/seedfiles/2015-07-30_07.42.57_1040584639066665419_208634859.jpg",
    caption: "Herding Horses",
    location: "China",
    poster_id: 8)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997546/seedfiles/2016-06-04_07.07.27_1265247250243383441_208634859.jpg",
    caption: "sunset",
    location: "",
    poster_id: 9)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997546/seedfiles/2016-06-04_07.07.27_1265247250243383441_208634859.jpg",
    caption: "cloudy day",
    location: "",
    poster_id: 9)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997542/seedfiles/2016-05-31_19.45.07_1262729494478451484_208634859.jpg",
    caption: "Beach weather",
    location: "",
    poster_id: 9)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997542/seedfiles/2015-07-21_06.44.34_1034032274465354368_208634859.jpg",
    caption: "",
    location: "Japan",
    poster_id: 9)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997546/seedfiles/2015-07-19_02.01.23_1032440193464660221_208634859.jpg",
    caption: "",
    location: "",
    poster_id: 9)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997544/seedfiles/2015-07-20_06.24.16_1033297282718232844_208634859.jpg",
    caption: "",
    location: "Kyoto",
    poster_id: 9)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997804/seedfiles/2015-07-10_15.10.52_1026314566789493090_208634859.jpg",
    caption: "Desert Travels",
    location: "Egypt",
    poster_id: 10)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997805/seedfiles/2015-07-11_02.36.44_1026659779642913680_208634859.jpg",
    caption: "Hot Hot!",
    location: "Mojavi",
    poster_id: 10)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997807/seedfiles/2016-04-23_14.39.35_1235034234583511999_208634859.jpg",
    caption: "",
    location: "",
    poster_id: 10)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997805/seedfiles/2016-04-20_05.40.31_1232588589415264609_208634859.jpg",
    caption: "schools out!",
    location: "",
    poster_id: 10)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997804/seedfiles/2016-04-17_07.36.37_1230472695268504389_208634859.jpg",
    caption: "",
    location: "",
    poster_id: 10)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997803/seedfiles/2015-07-15_01.49.42_1029535209345511497_208634859.jpg",
    caption: "Huge shrine",
    location: "",
    poster_id: 10)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489997804/seedfiles/2015-07-14_07.39.36_1028986540124795753_208634859.jpg",
    caption: "Dancers!",
    location: "",
    poster_id: 10)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998140/seedfiles/2015-06-22_18.52.08_1013379977934794752_208634859.jpg",
    caption: "",
    location: "",
    poster_id: 11)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998140/seedfiles/2015-07-04_22.19.56_1022181874372178098_208634859.jpg",
    caption: "",
    location: "",
    poster_id: 11)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998141/seedfiles/2016-03-21_10.30.10_1210991104959968252_208634859.jpg",
    caption: "",
    location: "",
    poster_id: 11)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998143/seedfiles/2015-07-05_14.19.38_1022664907432915637_208634859.jpg",
    caption: "",
    location: "",
    poster_id: 11)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998140/seedfiles/2015-07-09_19.12.36_1025711465929896571_208634859.jpg",
    caption: "Bonfire",
    location: "",
    poster_id: 11)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998141/seedfiles/2016-03-07_07.18.57_1200778198905516238_208634859.jpg",
    caption: "Winter pony",
    location: "",
    poster_id: 11)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998140/seedfiles/2016-03-12_03.16.33_1204280074384961810_208634859.jpg",
    caption: "Snowy home",
    location: "",
    poster_id: 11)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998366/seedfiles/2015-05-30_12.43.38_996524660093612831_208634859.jpg",
    caption: "",
    location: "",
    poster_id: 12)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998366/seedfiles/2015-05-30_12.43.38_996524660093612831_208634859.jpg",
    caption: "",
    location: "",
    poster_id: 12)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998370/seedfiles/2016-02-14_06.26.28_1184806714030682577_208634859.jpg",
    caption: "",
    location: "",
    poster_id: 12)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998368/seedfiles/2016-02-10_00.05.13_1181715719105802939_208634859.jpg",
    caption: "",
    location: "",
    poster_id: 12)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998368/seedfiles/2016-02-10_00.05.13_1181715719105802939_208634859.jpg",
    caption: "Beautiful",
    location: "",
    poster_id: 12)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998371/seedfiles/2016-02-01_07.58.20_1175430866307642249_208634859.jpg",
    caption: "Eye rubbing",
    location: "",
    poster_id: 12)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998368/seedfiles/2016-02-05_02.43.46_1178171646646415761_208634859.jpg",
    caption: "drying the sheets",
    location: "",
    poster_id: 12)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998586/seedfiles/2016-01-20_19.06.00_1167069607686303751_208634859.jpg",
    caption: "",
    location: "",
    poster_id: 13)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998585/seedfiles/2016-01-17_17.35.39_1164849809313230848_208634859.jpg",
    caption: "",
    location: "",
    poster_id: 13)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998584/seedfiles/2016-01-16_22.44.58_1164280717908898539_208634859.jpg",
    caption: "",
    location: "",
    poster_id: 13)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998582/seedfiles/2016-01-14_00.10.46_1162149569858630325_208634859.jpg",
    caption: "so many balloons",
    location: "",
    poster_id: 13)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998582/seedfiles/2016-01-14_20.12.47_1162754568120692913_208634859.jpg",
    caption: "Ancient Incans",
    location: "South America",
    poster_id: 13)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998583/seedfiles/2015-05-16_06.38.48_986194170014856129_208634859.jpg",
    caption: "Morning dew",
    location: "",
    poster_id: 13)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998819/seedfiles/2015-12-26_19.30.08_1148962361177796681_208634859.jpg",
    caption: "Nice street",
    location: "",
    poster_id: 14)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998820/seedfiles/2015-12-15_18.02.27_1140945692555735558_208634859.jpg",
    caption: "Carefree",
    location: "",
    poster_id: 14)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998819/seedfiles/2015-12-12_16.19.50_1138719722213994702_208634859.jpg",
    caption: "riverbank",
    location: "",
    poster_id: 14)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998933/seedfiles/2015-12-05_06.11.20_1133340024973816504_208634859.jpg",
    caption: "",
    location: "",
    poster_id: 15)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998934/seedfiles/2015-12-03_08.06.12_1131948280289948204_208634859.jpg",
    caption: "",
    location: "",
    poster_id: 15)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998935/seedfiles/2015-11-30_11.50.35_1129886896551096937_208634859.jpg",
    caption: "",
    location: "",
    poster_id: 15)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998933/seedfiles/2015-11-22_15.01.20_1124184692322202561_208634859.jpg",
    caption: "",
    location: "",
    poster_id: 15)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998931/seedfiles/2015-11-18_13.08.37_1121228862207553651_208634859.jpg",
    caption: "",
    location: "USA",
    poster_id: 15)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998933/seedfiles/2015-11-16_10.45.59_1119707519913816875_208634859.jpg",
    caption: "Backpacking",
    location: "",
    poster_id: 15)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998931/seedfiles/2015-03-18_08.34.06_943490435111449176_208634859.jpg",
    caption: "Squeaky clean",
    location: "",
    poster_id: 15)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489998931/seedfiles/2015-03-18_08.34.06_943490435111449176_208634859.jpg",
    caption: "Paradise",
    location: "",
    poster_id: 15)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489999122/seedfiles/2015-10-31_14.42.48_1108200105372807289_208634859.jpg",
    caption: "",
    location: "",
    poster_id: 16)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489999121/seedfiles/2015-11-03_16.04.45_1110445877149561153_208634859.jpg",
    caption: "",
    location: "",
    poster_id: 16)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489999121/seedfiles/2015-10-29_10.22.26_1106619500910605025_208634859.jpg",
    caption: "",
    location: "",
    poster_id: 16)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489999123/seedfiles/2015-10-27_04.27.33_1104991329517826267_208634859.jpg",
    caption: "",
    location: "",
    poster_id: 16)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489999121/seedfiles/2015-08-08_02.26.05_1046948140274152270_208634859.jpg",
    caption: "Horsin around",
    location: "",
    poster_id: 16)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1489999120/seedfiles/2015-08-04_16.19.44_1044468623643243189_208634859.jpg",
    caption: "Regret",
    location: "",
    poster_id: 16)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1490286124/seedfiles/2017-01-28_17.26.44_1438085768223451043_208634859.jpg",
    caption: "Cool bug",
    location: "NYC",
    poster_id: 17)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1490286124/seedfiles/2017-02-03_19.03.32_1442483142387772569_208634859.jpg",
    caption: "Gymnastics",
    location: "",
    poster_id: 17)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1490286120/seedfiles/2016-06-25_16.23.17_1280747302390101131_208634859.jpg",
    caption: "Artsy streetlamp",
    location: "",
    poster_id: 17)

  Photo.create!(
    img_url: "https://res.cloudinary.com/mrdsgc/image/upload/v1490286124/seedfiles/2017-01-30_23.24.09_1439715214416290132_208634859.jpg",
    caption: "Meow!",
    location: "",
    poster_id: 17)


(1..17).each do |id_1|
  (1..17).each do |id_2|
    if (id_1 != id_2) && (rand(100) > 30)
      Follow.create!(
        follower_id: id_1,
        followed_id: id_2)
    end
  end
end

20.times do
  (1..14).each do |id_1|
    photo_id = rand(1..106)
    Like.create!(
    liker_id: id_1,
    photo_id: photo_id)
  end
end





COMMENTS = [
  "Beautiful!",
  "I like your style!",
  "Sweet photo!",
  "Cool photo, much love",
  "Nice pic!",
  "Nice one, keep it up",
  "Cool!",
  "Awesome",
  "I love it",
  "Super cool!",
  "Amazing snap",
  "Where was this taken?",
  "What a photo!",
  "Nice photo",
  "Nice picture",
  "Cool picture",
  "Beautiful photo",
  "sweet pic",
  "Rad pic",
  "Rad Photo",
  "Awesome snap",
  "Sick snap",
  "Sick photo",
  "sick pic",
  "Amazing",
  "Why did you take this?",
  "I'm liking this",
  "So creative",
  "Nice angle",
  "Show me more!",
  "cool angle",
  "Super!",
  "Love it",
  "I'm loving it",
  "Killer pic!",
  "Killer Photo",
  "That's so cool",
  "Favorite pic",
  "Wonderful!",
  "Stunning!",
  "Bold!",
  "Creative!",
  "Marvelous!",
  "Captivating",
  "A+!!"

]


20.times do
  (1..14).each do |id_1|
    comment_body = COMMENTS.sample
    photo_id = rand(1..106)
    Comment.create!(
    comment_author_id: id_1,
    photo_id: photo_id,
    body: comment_body)
  end
end


def rand_time(from, to=Time.now)
  Time.at(rand_in_range(from.to_f, to.to_f))
end

def rand_in_range(from, to)
  rand * (to - from) + from
end

@photos = Photo.all

@photos.each do |photo|
  random_date= rand_time(30.days.ago)
  photo.update({ created_at: random_date})
end
