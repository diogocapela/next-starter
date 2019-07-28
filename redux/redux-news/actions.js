/* eslint-disable no-undef */
import axios from 'axios';

import * as actionTypes from './actionTypes';

export const loadNews = () => (dispatch, getState) => {
  const state = getState();

  const isCached = Object.values(state.news.result.normalized).length > 0;

  if (isCached) return;

  dispatch({
    type: actionTypes.LOAD_NEWS_START,
  });

  try {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`
      )
      .then(res => {
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
