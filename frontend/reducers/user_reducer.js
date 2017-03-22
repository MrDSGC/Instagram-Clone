import {
  RECEIVE_USER,
  RECEIVE_ERRORS} from '../actions/user_actions';
import merge from 'lodash/merge';

const initialState = { followers: [],
following: [], errors:[] };

const UserReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch(action.type) {
    case RECEIVE_USER:
      return action.user
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullUser, {
        errors
      });
    default:
      return state;
  }
};

export default UserReducer;
