import {RECEIVE_PHOTOS} from '../actions/photos_actions';
import {RECEIVE_LIKE, REMOVE_LIKE} from "../actions/like_actions"
import merge from 'lodash/merge';
import _ from "lodash"

const initialState = [];

const PhotosReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch(action.type) {
    case RECEIVE_PHOTOS:
    newState = {}
     action.photos.forEach((photo)=> newState[photo.id] = photo)
     return newState;
    case RECEIVE_LIKE:
      newState[action.like.photo_id].current_user_liked = true
      newState[action.like.photo_id].like_count += 1
      return newState
    case REMOVE_LIKE:
      newState[action.like.photo_id].current_user_liked = false
      newState[action.like.photo_id].like_count -= 1
      return newState
    default:
      return state;
  }
};

export default PhotosReducer;
