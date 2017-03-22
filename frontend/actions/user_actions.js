import * as APIUtil from '../util/users_api_util'

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const receiveErrors = errors => {
  return {type: RECEIVE_ERRORS,
  errors}
};

export const editUser = user => dispatch => (
  APIUtil.patchUser(user)
    .then(responseUser => dispatch(receiveUser(responseUser)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchUser = username => dispatch => (
  APIUtil.getUser(username)
    .then(user => dispatch(receiveUser(user)))
);

export const fetchUsers = () => dispatch => (
  APIUtil.getUsers()
    .then(users => dispatch(receiveUsers(users)))
);
