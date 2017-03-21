import {
  RECEIVE_USER} from '../actions/user_actions';
import merge from 'lodash/merge';

const initialState = { followers: [],
following: [] };

const UserReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch(action.type) {
    case RECEIVE_USER:
      return action.user
    default:
      return state;
  }
};

export default UserReducer;
