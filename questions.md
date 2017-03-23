**QUESTIONS**

*STYLING*

Cant get comments index to look good in photo modal


*FUNCTIONAL*


likes not updating in the feed

edit profile taking old state

 feed comments are used instead of photo comments, need to refresh once to work

**ANSWERED**

logout while on feed page doesnt redirect to login page
when navigating from feed, comments_index_ line 31 not rendering - SOLVED set photos state to [] upon logout

comments wont update in feed - it can but takes SO LONG -SOLVED get rid of componentWillReceiveProps in comment index
**TO DO**


**DONE TODAY**


**BUG LIST**

*MAJOR*

  - likes not updating in photo_index.jsx state

*MINOR*

- no errors for user Edit. will i really need it?

- holding down keys does not re-register keystroke?
  + use this.select()

- how to make it auto select the text on double click
  + change onChange to onKeypress

- random console log bugs with dropzone
  + check dropzone docs

- cant scroll through show photos via left and right buttons
  + do we have to close and open a new modal to do that?
