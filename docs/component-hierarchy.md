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

**EditProfileContainer**
 - Header
 - ProfileInfoForm

**EditPhotoContainer**
 - Header
 - PhotoForm

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

 **PhotoFormContainer**
 - PhotoHeader
 - PhotoForm

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "app.jsx"
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/feed" | "MainFeedContainer" |
| "/:username" | "ProfileContainer" |
| "/:username/edit" | "EditProfileContainer" |
| "/:username/:id" | "PhotoContainer" |
| "/:username/upload" | "PhotoFormContainer" |
| "/:username/:id/edit" | "PhotoEditContainer" |
