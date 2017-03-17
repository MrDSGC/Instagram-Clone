import * as APIUtil from '../util/likes_api_util'
import { hashHistory } from 'react-router';
export const RECEIVE_LIKE = "RECEIVE_LIKE"

export const getLikes = likes => ({
  type: RECEIVE_LIKE,
  likes
})

export const addLike = like => (
  APIUtil.postLike(like)
);

export const removeLike = like => (
  APIUtil.deleteLike(like.id)
);
