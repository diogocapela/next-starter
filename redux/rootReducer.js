import { combineReducers } from 'redux';
import auth from './redux-auth';
import posts from './redux-posts';

export default combineReducers({
  auth,
  posts,
});
