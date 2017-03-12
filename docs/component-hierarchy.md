## Component Hierarchy

**AuthFormContainer**
 - AuthHeader
 - AuthForm

**NavContainer**
 - Search
  - SearchResultsIndex

**ProfileContainer**
 - Profile
 - ProfilePhotoIndex

**MainFeedContainer**
 - PhotoIndex
  + PhotoContainer

**PhotoContainer**
 - Header
 - Image
 - Likes
 - Caption
 - CommentsContainer

 **CommentsContainer**
 - CommentsIndex
 - CommentsForm

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/feed" | "MainFeedContainer" |
| "/:username" | "ProfileContainer" |
| "/:username/:id" | "PhotoContainer" |
