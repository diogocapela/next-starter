import axios from 'axios';
import Cookies from 'js-cookie';
import { AUTH_API } from '#config/endpoints';
import * as cookieTypes from '#config/cookieTypes';
import * as actionTypes from './actionTypes';

export const register = data => async dispatch => {
  dispatch({
    type: actionTypes.REGISTER_START,
  });

  try {
    const res = await axios({
      method: 'post',
      url: `${AUTH_API}/auth/register`,
      data,
    });

    Cookies.set(cookieTypes.USER_TOKEN, res.data.data.token, { expires: 90 });

    dispatch({
      type: actionTypes.REGISTER_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.REGISTER_ERROR,
      payload: error,
    });
  }
};

export const login = data => async dispatch => {
  dispatch({
    type: actionTypes.LOGIN_START,
  });

  try {
    const res = await axios({
      method: 'post',
      url: `${AUTH_API}/auth/login`,
      data,
    });

    Cookies.set(cookieTypes.USER_TOKEN, res.data.data.token, { expires: 90 });

    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_ERROR,
      payload: error,
    });
  }
};

export const logout = () => async dispatch => {
  dispatch({
    type: actionTypes.LOGOUT_START,
  });

  try {
    Cookies.remove(cookieTypes.USER_TOKEN);

    dispatch({
      type: actionTypes.LOGOUT_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOGOUT_ERROR,
      payload: error,
    });
  }
};

export const getUser = token => async dispatch => {
  dispatch({
    type: actionTypes.GET_USER_START,
  });

  try {
    const res = await axios({
      method: 'post',
      url: `${AUTH_API}/auth/me`,
      data: { token },
    });

    Cookies.get(cookieTypes.USER_TOKEN);

    dispatch({
      type: actionTypes.GET_USER_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_USER_ERROR,
      payload: error,
    });
  }
};
