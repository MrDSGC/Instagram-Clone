import {RECEIVE_CURRENT_USER,
        RECEIVE_ERRORS} from '../actions/session_actions';
import merge from 'lodash/merge';
const initialSession = {
  currentUser: null,
  errors:[]
};

const SessionReducer = (state = initialSession, action) => {
  Object.freeze(state);
   switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser
      return merge({}, initialSession, {currentUser})
    case RECEIVE_ERRORS:
      let errors = merge(state,  action.errors)
      return errors.errors
    default:
      return state;
  }

};

export default SessionReducer;
