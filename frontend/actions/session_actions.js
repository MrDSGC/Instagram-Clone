import * as APIUtil from '../util/session_api_util'
import { hashHistory } from 'react-router';
import { receivePhotos} from './photos_actions'
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(user => {
      dispatch(receiveCurrentUser(user))
      hashHistory.push(`/feed`)
    })
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const login = user => dispatch => (
  APIUtil.login(user)
    .then(user => {
      dispatch(receiveCurrentUser(user))
      hashHistory.push(`/feed`)
    })
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = (id) => dispatch => (
  APIUtil.logout(id)
  .then(user => {
    dispatch(receivePhotos([]))
    dispatch(receiveCurrentUser(null))
    hashHistory.push("/login")
  })
);

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => {
  return {type: RECEIVE_ERRORS,
  errors}
};
