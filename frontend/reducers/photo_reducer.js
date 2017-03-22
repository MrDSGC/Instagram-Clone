import {
  RECEIVE_PHOTO} from '../actions/photo_actions';
import merge from 'lodash/merge';

const initialState =  {
  id: "",
  img_url: "",
  caption: "",
  poster: {},
  current_user_liked: false,
  location: "",
  comments: []
};

const PhotoReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch(action.type) {
    case RECEIVE_PHOTO:
      return action.photo
    default:
      return state;
  }
};

export default PhotoReducer;
