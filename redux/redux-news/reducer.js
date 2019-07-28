import kebabCase from 'lodash/kebabCase';

import * as actionTypes from './actionTypes';

const initialState = {
  result: {
    original: {},
    normalized: {},
  },
  isLoading: false,
  error: null,
};

const news = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.LOAD_NEWS_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actionTypes.LOAD_NEWS_SUCCESS:
      return {
        ...state,
        result: {
          original: action.payload,
          normalized:
            action.payload.articles.reduce((acc, item) => {
              const slug = kebabCase(item.title);
              return {
                ...acc,
                [slug]: {
                  ...item,
                  slug,
                },
              };
            }, {}) || {},
        },
        isLoading: false,
        error: null,
      };
    case actionTypes.LOAD_NEWS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default news;
