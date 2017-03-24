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


**3/16**

- Unfortunately did not fully complete images :( Still some 20% styling left  and 90% of photo upload functionality complete
- feeling a bit more confident with CSS
- super satisfied with react-upload function! (ty andrew)
- Got 2nd modal up and styled 100x faster than 1st one
- learned i can put debugger straight into jbuilder file

- noteable bugs/challenges
  + rails #created_at is not a DateTime className
  + location and caption forms were not rendering at all because if statements in the 2 consts. split them into 4 consts and used terinary statement to render either
  + location and caption forms altered to use same handlers with different field inputs
  + Edit forms were not prefilled when first opened. super long debugging process due to the fact that there were bugs in multiple locations of the redux cycle (but got them all!!)

**3/17**

- completed fully functioning images and styled!
- made root index for splash page
- added some toggles
- likes were more difficult than anticipated
- low day


**3/18**

- finally uploaded to heroku!
- functioning backend for likes! still stuck with front end...
- began comment phase
- began collecting seed photos...
- made feed page

- noteable bugs/challenges
  + cant view photos with undefined currentUser
  + background fill alters picture dimensions - fixed with not hardcoding width and height for modal dimension


**3/19**

- after updating, heroku stopped working...
- seeding data takes a long time
- comments writeable and deleteable!!

- noteable bugs/challenges
  + highest like/comment state persists through different photos
  + comments share key after deleting comment


**3/20**

- fully functional comments and like features!

- noteable bugs/challenges
  + likes state was not updating properly and persisting between photos -solved by returning action.type instead of merging. changed state to fix updating bugs
  + feed only shows 1 photo on repeat - passing props directly to Photo component
  + cannot index a 2nd time to find feed photos

**3/21**

- got feed looking good
- profile page fully functional besides follow button!
- wrote simple through association to find feed photos!

- notable bugs/challenges
  + multiple indexes -solved by conditionally indexing based on input
  + feed photos rendering wrong - solved by conditionally rendering based on feed prop passed into the component
  + comments and likes state not updating in feed

**3/22**

- got everything working besides a few minor bugs!
- everything fully seeded

- notable bugs/challenges
  + feed comments are used instead of photo comments, need to refresh once to work - oldstate was being merged with new state, solved by resetting state every RECEIVECOMMENTS
  + logout while on feed page doesnt redirect to login page
  when navigating from feed, comments_index_ line 31 not rendering - SOLVED set photos state to [] upon logout
  + comments wont update in feed - it can but takes SO LONG -SOLVED get rid of componentWillReceiveProps in comment index


**3/23**

- in hind-sight it probably would have been easier to have both photo component only take in a photo object passed in as a prop from the photos array. but worked on photo profile first and did not forsee challenges

- wrote up production readme

- made site more usable when not logged in

- fully functioning site bug free
