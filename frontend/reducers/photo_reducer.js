import {
  RECEIVE_PHOTOS,
  RECEIVE_PHOTO,} from '../actions/photo_actions';
import merge from 'lodash/merge';

const initialState = {
  currentPhoto: {
    id: "",
    img_url: "",
    caption: "",
    poster: {},
    like_count_minus_one: "",
    likers: [],
    location: "",
    comments: []
  },
  photos: []
};

const SessionReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch(action.type) {
    case RECEIVE_PHOTOS:
      return merge(newState, {photos: action.photos});
    case RECEIVE_PHOTO:
      return merge(newState, {currentPhoto: action.photo});
    default:
      return state;
  }
};

export default SessionReducer;
