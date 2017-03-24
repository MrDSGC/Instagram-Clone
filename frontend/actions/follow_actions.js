import * as APIUtil from '../util/follows_api_util'

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

export const recieveFollow = follow_id => ({
  type: RECEIVE_FOLLOW,
  follow_id
});

export const removeFollow = follow => ({
  type: REMOVE_FOLLOW,
  follow
});

export const isFollowing = following_id => dispatch => (
  APIUtil.getFollow(following_id)
    .then(responseFollow => dispatch(recieveFollow(responseFollow)))
)

export const isFollowingAnyone = () => dispatch => (
  APIUtil.getFollowingAnyone()
    .then(responseFollow => dispatch(recieveFollow(responseFollow)))
)

export const addFollow = follow => dispatch => (
  APIUtil.postFollow(follow)
    .then(responseFollow => dispatch(recieveFollow(responseFollow)))
);

export const destroyFollow = following_id => dispatch =>(
  APIUtil.deleteFollow(following_id)
    .then(responseFollow => dispatch(removeFollow(responseFollow)))
);
