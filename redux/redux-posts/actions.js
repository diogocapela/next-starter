import request from '@ns/redux/request';

import * as actionTypes from './actionTypes';

export const fetchPosts = () => async (dispatch) => {
  dispatch({
    type: actionTypes.FETCH_POSTS_START,
  });

  try {
    const data = await request('/posts', {
      method: 'GET',
    });

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
