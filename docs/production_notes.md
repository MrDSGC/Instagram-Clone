**3/14 Auth**
- Completed fully functioning login system on first day!
- Discovered nesting "/login" and "/signup" paths under "/splash" allows for  user to navigate to signup and login without having to use "/splash/login"
- tiny css hiccups (or-line)

- noteable bugs/challenges
  + session.errors persisted between pages after being set by   #receiveErrors
    - Solved with mapping #receiveErrors(null) into forms and calling with life cycle methods
  + Not redirecting after login/logout
    - Solved with adding #hashHistory.push to #login and #logout then statements.

**3/15 Images**
- Completed the backend models and controllers for photos
- passed and searched for photos from Photo table via username instead of poster_id to make url more clean
- beginning Modals!!

- noteable bugs/challenges
  + removing photos not working because photos state is an array
    - solved by bypassing REMOVE action and refetching after destroying photo from database
  + CSS much more difficult than first day. Work in progress
