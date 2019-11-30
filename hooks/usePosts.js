import { useContext, useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { ReactReduxContext, useSelector } from 'react-redux';
import { loadPosts } from '#redux/redux-posts/actions';

const usePosts = () => {
  const {
    store: { dispatch },
  } = useContext(ReactReduxContext);

  const posts = useSelector(state => state.posts);

  const actions = useMemo(
    () =>
      bindActionCreators(
        {
          loadPosts,
        },
        dispatch
      ),
    [dispatch]
  );

  return {
    ...actions,
    posts: posts.result || [],
    isLoading: posts.isLoading,
    error: posts.error,
  };
};

export default usePosts;
