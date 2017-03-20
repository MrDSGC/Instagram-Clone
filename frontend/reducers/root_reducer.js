import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import photoReducer from './photo_reducer';
import commentReducer from './comment_reducer';
import userReducer from './user_reducer';

export default combineReducers({
  session: sessionReducer,
  photos: photoReducer,
  comments: commentReducer,
  user: userReducer
});
