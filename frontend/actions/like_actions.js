import * as APIUtil from '../util/likes_api_util'

export const RECEIVE_LIKE = "RECEIVE_LIKE"
export const REMOVE_LIKE = "REMOVE_LIKE"

export const removeLike = like => ({
  type: REMOVE_LIKE,
  like
})

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
})

export const addLike = like => dispatch => (
  APIUtil.postLike(like)
    .then(responseLike => dispatch(receiveLike(responseLike)))
);

export const destroyLike = like => dispatch => (
  APIUtil.deleteLike(like)
    .then(responseLike => dispatch(removeLike(responseLike)))
);
