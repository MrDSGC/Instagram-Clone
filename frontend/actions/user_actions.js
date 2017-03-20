import * as APIUtil from '../util/likes_api_util'

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = username => dispatch => (
  APIUtil.getUser(username)
    .then(user => dispatch(receiveUser(user)))
)
