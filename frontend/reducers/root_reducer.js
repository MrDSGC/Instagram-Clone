import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import photoReducer from './photo_reducer';
import photosReducer from './photos_reducer';
import commentReducer from './comment_reducer';
import userReducer from './user_reducer';
import followsReducer from './follows_reducer';

export default combineReducers({
  session: sessionReducer,
  photos: photosReducer,
  currentPhoto: photoReducer,
  comments: commentReducer,
  user: userReducer,
  following: followsReducer
});
