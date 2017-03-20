import {
  RECEIVE_PHOTOS} from '../actions/photos_actions';
import merge from 'lodash/merge';

const initialState = [];

const PhotoReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch(action.type) {
    case RECEIVE_PHOTOS:
      return action.photos
    default:
      return state;
  }
};

export default PhotoReducer;
