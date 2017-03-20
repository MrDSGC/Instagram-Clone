import { RECEIVE_COMMENTS } from '../actions/comment_actions';
import merge from 'lodash/merge';

const initialState = []

const CommentReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch(action.type) {
    case RECEIVE_COMMENTS:
      return action.comments ;
    default:
      return state;
  }
};

export default CommentReducer;
