import { useContext, useMemo, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { ReactReduxContext, useSelector } from 'react-redux';
import { loadNews } from '#redux/redux-news/actions';

const useNews = () => {
  const {
    store: { dispatch },
  } = useContext(ReactReduxContext);

  const news = useSelector(state => state.news);

  useEffect(() => {
    loadNews();
  }, []);

  const actions = useMemo(
    () =>
      bindActionCreators(
        {
          loadNews,
        },
        dispatch
      ),
    [dispatch]
  );

  return {
    ...actions,
    news: news.result.normalized || {},
    isLoading: news.isLoading,
    error: news.error,
  };
};

export default useNews;
