**QUESTIONS**

*STYLING*

make comments section fill the rest of the space


*FUNCTIONAL*

Should i make a seperate FeedPhotoContainer/ Component and style differently?


why do comments persist between photos if i call #componentDidMount and fetch a new photo id everytime for comment index?

how to pass down #handle like to the comment_form_container


**ANSWERED**


**TO DO**


**DONE TODAY**


**BUG LIST**

*MAJOR*
-  likes not updating properly in photo.jsx state
  +  0 likes until go to another photo with more than 0 likes and state is persisted between photos
  + 1 less like upon opening

- comments not updating properly as well

*MINOR*

- likes not updating in photo_index.jsx state

- holding down keys does not re-register keystroke?
  + use this.select()

- how to make it auto select the text on double click
  + change onChange to onKeypress

- random console log bugs with dropzone
  + check dropzone docs

- cant scroll through show photos via left and right buttons
