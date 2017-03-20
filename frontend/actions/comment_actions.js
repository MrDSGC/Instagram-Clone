import * as APIUtil from '../util/comments_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const fetchComments = photo_id => dispatch => (
  APIUtil.getComments(photo_id)
    .then(fetchedComments => dispatch(receiveComments(fetchedComments)))
);

export const createComment = (photo_id, comment) => dispatch => (
  APIUtil.postComment(photo_id, comment)
    .then(fetchedComments => dispatch(receiveComments(fetchedComments)))
);

export const destroyComment = (photo_id, comment_id) => dispatch => (
  APIUtil.deleteComment(photo_id, comment_id)
    .then(fetchedComments => dispatch(receiveComments(fetchedComments)))
);
