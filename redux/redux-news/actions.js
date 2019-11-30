import axios from 'axios';
import { NEWS_API } from '#config/endpoints';
import * as actionTypes from './actionTypes';

export const loadNews = () => (dispatch, getState) => {
  const state = getState();

  const isCached = Object.values(state.news.result.normalized).length > 0;

  if (isCached) return;

  dispatch({
    type: actionTypes.LOAD_NEWS_START,
  });

  try {
    axios.get(`${NEWS_API}&q=bitcoin&sortBy=publishedAt`).then(res => {
      dispatch({
        type: actionTypes.LOAD_NEWS_SUCCESS,
        payload: res.data,
      });
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOAD_NEWS_ERROR,
      payload: error,
    });
  }
};
