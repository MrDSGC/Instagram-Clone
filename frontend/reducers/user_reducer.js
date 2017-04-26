import {
  RECEIVE_USER,
  RECEIVE_USERS,
  RECEIVE_USER_ERRORS
} from '../actions/user_actions';

import {
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW
} from '../actions/follow_actions';

import merge from 'lodash/merge';

const initialState = {
  suggestions: [],
  followers: [],
  following: [],
  errors:[] };

const UserReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, newState, action.user)
    case RECEIVE_USERS:
      return merge(initialState, {suggestions: action.users})
    case RECEIVE_USER_ERRORS:
      const errors = action.errors;
      return merge({}, initialState, {
        errors
      });
    case RECEIVE_FOLLOW:
      return merge( {}, newState, {follower_count: state.follower_count + 1})
    case REMOVE_FOLLOW:
      return merge( {}, newState, {follower_count: state.follower_count - 1})
    default:
      return state;
  }
};

export default UserReducer;
