import merge from 'lodash/merge';

const initialState = {
  likes: []
};

const SessionReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  return state;
  }
};

export default SessionReducer;
