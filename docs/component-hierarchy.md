 ## Component Hierarchy

**AuthFormContainer**
 - AuthHeader
 - AuthForm

**MainPageContainer**
 - NavContainer
 - ProfileContainer/MainFeedContainer 

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
| "/" | "App"  |
|"/splash"| "Splashpage"|
| "/login" | "AuthFormContainer" |
| "/signup" | "AuthFormContainer" |
| "/main" | "MainPageContainer" |
| "/:username" | "ProfileContainer" |
| "/:username/edit" | "EditProfileContainer" |
| "/:username/:id" | "PhotoContainer" |
| "/:username/upload" | "PhotoFormContainer" |
| "/:username/:id/edit" | "PhotoEditContainer" |
