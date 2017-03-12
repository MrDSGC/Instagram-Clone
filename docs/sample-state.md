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
  photos: {
    1: {
      img_url: "Sample State",
      caption: "this is a photo",
      poster_id: 1,
      likers: [],
      created_at: "date"

      comments: {
        1: {
          body: " cool pic",
          commenter_id: 2,
        }
      }
    }
  }
}
