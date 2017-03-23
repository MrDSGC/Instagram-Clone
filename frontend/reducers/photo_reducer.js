import {RECEIVE_PHOTO} from '../actions/photo_actions';
import {RECEIVE_LIKE, REMOVE_LIKE} from "../actions/like_actions"
import merge from 'lodash/merge';

const initialState =  {
  id: "",
  img_url: "",
  caption: "",
  poster: {},
  current_user_liked: false,
  location: "",
  comments: [],
  like_count: ''
};

const PhotoReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch(action.type) {
    case RECEIVE_PHOTO:
      return action.photo
    case RECEIVE_LIKE:
      return merge({}, newState, {current_user_liked: true, like_count: state.like_count + 1 });
    case REMOVE_LIKE:
      return merge({}, newState, {current_user_liked: false, like_count: state.like_count - 1 });
    default:
      return state;
  }
};

export default PhotoReducer;
