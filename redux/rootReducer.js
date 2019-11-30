import { combineReducers } from 'redux';
import auth from './redux-auth';
import news from './redux-news';

export default combineReducers({
  auth,
  news,
});
