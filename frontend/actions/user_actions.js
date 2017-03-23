import * as APIUtil from '../util/users_api_util'
import { hashHistory } from 'react-router';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER_ERRORS = "RECEIVE_ERRORS";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const receiveUserErrors = errors => {
  return {type: RECEIVE_USER_ERRORS,
  errors}
};

export const editUser = user => dispatch => (
  APIUtil.patchUser(user)
    .then( responseUser => {
      dispatch(receiveUser(responseUser))
      hashHistory.push(`/${responseUser.username}`)
    })
    .fail(err => dispatch(receiveUserErrors(err.responseJSON)))
);

export const fetchUser = username => dispatch => (
  APIUtil.getUser(username)
    .then(user => dispatch(receiveUser(user)))
);

export const fetchUsers = () => dispatch => (
  APIUtil.getUsers()
    .then(users => dispatch(receiveUsers(users)))
);
