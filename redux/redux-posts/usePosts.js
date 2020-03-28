import { useContext, useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { ReactReduxContext, useSelector } from 'react-redux';

import { fetchPosts } from './actions';

export default () => {
  const {
    store: { dispatch },
  } = useContext(ReactReduxContext);

  const posts = useSelector((state) => state.posts.result) || [];
  const isLoading = useSelector((state) => state.posts.isLoading);
  const error = useSelector((state) => state.posts.error);

  const actions = useMemo(
    () =>
      bindActionCreators(
        {
          fetchPosts,
        },
        dispatch
      ),
    [dispatch]
  );

  return {
    ...actions,
    posts,
    isLoading,
    error,
  };
};
