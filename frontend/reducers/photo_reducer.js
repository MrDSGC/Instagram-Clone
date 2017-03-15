import {
  RECEIVE_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO } from '../actions/photo_actions';
import merge from 'lodash/merge';

const initialState = {
  currentPhoto: null,
  photos: []
};

const SessionReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch(action.type) {
    case RECEIVE_PHOTOS:
      const photos = action.photos;
      return merge(newState, {photos: action.photos});
    case RECEIVE_PHOTO:
      const photo = action.photo
      return merge(newState, {currentPhoto: photo});
    case REMOVE_PHOTO:
      delete newState.photos[action.photo];
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
