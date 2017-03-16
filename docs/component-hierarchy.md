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

**ProfilePageContainer**
 - Profile
 - PhotoIndexContainer

 **PhotoIndexContainer**
 - PhotoIndex

 **ProfileDetailContainer**
 - ProfileDetails
 
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
| "/:username" | "ProfilePageContainer" |
| "/:username/edit" | "EditProfileContainer" |
| "/:username/:id" | "PhotoContainer" |
| "/:username/upload" | "PhotoFormContainer" |
| "/:username/:id/edit" | "PhotoEditContainer" |
