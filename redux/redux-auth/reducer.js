import * as actionTypes from './actionTypes';

const initialState = {
  profile: {
    result: undefined,
    isLoading: undefined,
    error: undefined,
  },
  register: {
    isLoading: undefined,
    error: undefined,
  },
  login: {
    isLoading: undefined,
    error: undefined,
  },
  logout: {
    isLoading: undefined,
    error: undefined,
  },
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.REGISTER_START:
      return {
        ...state,
        profile: {
          ...state.profile,
          isLoading: true,
          error: null,
        },
        register: {
          ...state.register,
          isLoading: true,
          error: null,
        },
      };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          result: action.payload,
          isLoading: false,
        },
        register: {
          ...state.register,
          isLoading: false,
        },
      };
    case actionTypes.REGISTER_ERROR:
      return {
        ...state,
        profile: {
          ...state.profile,
          isLoading: false,
          error: action.payload,
        },
        register: {
          ...state.register,
          isLoading: false,
          error: action.payload,
        },
      };
    case actionTypes.LOGIN_START:
      return {
        ...state,
        profile: {
          ...state.profile,
          isLoading: true,
        },
        login: {
          ...state.login,
          isLoading: true,
        },
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          result: action.payload,
          isLoading: false,
          error: null,
        },
        login: {
          ...state.login,
          isLoading: false,
          error: null,
        },
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        profile: {
          ...state.profile,
          isLoading: false,
          error: action.payload,
        },
        login: {
          ...state.login,
          isLoading: false,
        },
      };
    case actionTypes.LOGOUT_START:
      return {
        ...state,
        profile: {
          ...state.profile,
          isLoading: true,
        },
        logout: {
          ...state.logout,
          isLoading: true,
        },
      };
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          result: null,
          isLoading: false,
          error: null,
        },
        logout: {
          ...state.logout,
          isLoading: false,
          error: null,
        },
      };
    case actionTypes.LOGOUT_ERROR:
      return {
        ...state,
        profile: {
          ...state.profile,
          isLoading: false,
          error: action.payload,
        },
        logout: {
          ...state.logout,
          isLoading: false,
        },
      };
    case actionTypes.GET_USER_START:
      return {
        ...state,
        profile: {
          ...state.profile,
          isLoading: true,
          error: null,
        },
      };
    case actionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          result: action.payload,
          isLoading: false,
        },
      };
    case actionTypes.GET_USER_ERROR:
      return {
        ...state,
        profile: {
          ...state.profile,
          isLoading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default auth;
