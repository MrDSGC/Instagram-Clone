**3/14 Auth**
- Completed fully functioning login system on first day!
- noteable bugs
  + session.errors persisted between pages after being set by   #receiveErrors
    - Solved with mapping #receiveErrors(null) into forms and calling with life cycle methods
  + Not redirecting after login/logout
    - Solved with adding #hashHistory.push to #login and #logout then statements.