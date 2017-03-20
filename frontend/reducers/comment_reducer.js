import { RECEIVE_COMMENTS } from '../actions/comment_actions';
import merge from 'lodash/merge';

const initialState = {
  comments: [] };

const CommentReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch(action.type) {
    case RECEIVE_COMMENTS:
      return merge(newState, {comments: action.comments});
    default:
      return state;
  }
};

export default CommentReducer;
