import fetch from 'isomorphic-unfetch';

import { POSTS_API } from '@ns/config/endpoints';
import * as actionTypes from './actionTypes';

export const fetchPosts = () => async (dispatch) => {
  dispatch({
    type: actionTypes.FETCH_POSTS_START,
  });

  try {
    const res = await fetch(POSTS_API, {
      method: 'GET',
    });
    const data = await res.json();

    dispatch({
      type: actionTypes.FETCH_POSTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.FETCH_POSTS_ERROR,
      payload: error,
    });
  }
};
