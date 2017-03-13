import * as Util from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (currentUser) => {
  return{
    type: RECEIVE_CURRENT_USER,
    currentUser

  }
};

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});


export const login = (formUser) => (dispatch) => {
  return Util.postSession(formUser)
    .then( response => dispatch(receiveCurrentUser(response)) )
    .fail( response => dispatch(receiveErrors(response)) );
};

export const logout = (user) => (dispatch) => {
  return Util.deleteSession(user)
    .then( response => dispatch(receiveCurrentUser(null)) )
};

export const signup = (formUser) => (dispatch )=> {
  return Util.postUser(formUser)
    .then( response => dispatch (receiveCurrentUser(response)) )
    .fail( response => dispatch(receiveErrors(response)) );
};
