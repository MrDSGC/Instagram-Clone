import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import photoReducer from './photo_reducer';

export default combineReducers({
  session: sessionReducer,
  photos: photoReducer
});
