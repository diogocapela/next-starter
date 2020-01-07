import fetch from 'isomorphic-unfetch';
import { POSTS_API } from '#config/endpoints';
import * as actionTypes from './actionTypes';

export const loadPosts = () => async dispatch => {
  dispatch({
    type: actionTypes.LOAD_POSTS_START,
  });

  try {
    const res = await fetch(POSTS_API, {
      method: 'GET',
    });
    const data = await res.json();

    dispatch({
      type: actionTypes.LOAD_POSTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOAD_POSTS_ERROR,
      payload: error,
    });
  }
};
