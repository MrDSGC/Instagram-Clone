import * as APIUtil from '../util/comments_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT"

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
})

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
})

export const fetchComments = photo_id => dispatch => {
  return(
  APIUtil.getComments(photo_id)
    .then(fetchedComments => dispatch(receiveComments(fetchedComments)))
)};

export const createComment = (photo_id, comment) => dispatch => (
  APIUtil.postComment(photo_id, comment)
    .then(fetchedComment => dispatch(receiveComment(fetchedComment)))
);

export const destroyComment = (photo_id, comment_id) => dispatch => (
  APIUtil.deleteComment(photo_id, comment_id)
    .then(fetchedComment => dispatch(removeComment(fetchedComment)))
);
