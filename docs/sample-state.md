{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createComment: {errors: ["body can't be blank"]}
  },
  photo: {
    1: {
      img_url: "Sample State",
      caption: "this is a photo",
      poster_id: 1,
      likers: [],
      created_at: "date",
      location: "sample location"

      comments: {
        1: {
          body: " cool pic",
          commenter_id: 2,
        }
      }
    }
  },
  photos: {
    [{
      img_url: "sample url",
      like_count: 100,
      comment_count: 100
      }]
  },
  userDetails {
    username: "sammpleusername",
    user_profile_pic: "sample_url",
    user_post_count: 100,
    user_follower_count: 100,
    user_following_count: 100,
    user_bio: text
  }
}
