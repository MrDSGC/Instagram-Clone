import {RECEIVE_PHOTOS} from '../actions/photos_actions';
import {RECEIVE_LIKE, REMOVE_LIKE} from "../actions/like_actions"
import merge from 'lodash/merge';
import _ from "lodash"

const initialState = [];

const PhotoReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch(action.type) {
    case RECEIVE_PHOTOS:
    newState = {}
     action.photos.forEach((photo)=> newState[photo.id] = photo)
     return newState;
    case RECEIVE_LIKE:
      let appendedState = {}
      _.values(newState).forEach(photo => {
        if(action.photo_id === photo.id) {
          photo.current_user_liked = true
          photo.like_count += 1
        }
        newState[photo.id] = photo
      })
      return appendedState
    case REMOVE_LIKE:
      appendedState = {}
      _.values(newState).forEach(photo => {
        if(action.photo_id === photo.id) {
          photo.current_user_liked = false
          photo.like_count -= 1
        }
        newState[photo.id] = photo
      })
      return appendedState
    default:
      return state;
  }
};

export default PhotoReducer;
