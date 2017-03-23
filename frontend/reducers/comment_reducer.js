import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import merge from 'lodash/merge';

const initialState = {}

const CommentReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch(action.type) {
    case RECEIVE_COMMENTS:
     newState = {}
      action.comments.forEach((comment)=> newState[comment.id] = comment)
      return newState;
    case RECEIVE_COMMENT:
      let appendedState = merge(newState, {[action.comment.id]: action.comment})
      return appendedState;
    case REMOVE_COMMENT:
      delete newState[action.comment.id]
      return newState;
    default:
      return state;
  }
};

export default CommentReducer;
