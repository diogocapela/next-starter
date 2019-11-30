import * as actionTypes from './actionTypes';

const initialState = {
  result: undefined,
  isLoading: undefined,
  error: undefined,
};

const posts = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.LOAD_POSTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.LOAD_POSTS_SUCCESS:
      return {
        ...state,
        result: action.payload,
        isLoading: false,
      };
    case actionTypes.LOAD_POSTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default posts;
