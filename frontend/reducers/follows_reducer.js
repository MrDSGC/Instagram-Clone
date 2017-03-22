import {
  REMOVE_FOLLOW,
  RECEIVE_FOLLOW} from '../actions/follow_actions';
import merge from 'lodash/merge';

const initialState =  { };

const FollowReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch(action.type) {
    case RECEIVE_FOLLOW:
      return action.follow_id
    case REMOVE_FOLLOW:
      return  {id: false}
    default:
      return state
  }
};

export default FollowReducer;
