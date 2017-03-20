import * as APIUtil from '../util/likes_api_util'

export const addLike = like => (
  APIUtil.postLike(like)
);

export const removeLike = like => (
  APIUtil.deleteLike(like)
);
