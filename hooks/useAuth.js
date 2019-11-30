import { useContext, useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { ReactReduxContext, useSelector } from 'react-redux';
import { register, login, logout, getUser } from '#redux/redux-auth/actions';

const useAuth = () => {
  const {
    store: { dispatch },
  } = useContext(ReactReduxContext);

  const state = useSelector(state => state.auth);

  const actions = useMemo(
    () =>
      bindActionCreators(
        {
          register,
          login,
          logout,
          getUser,
        },
        dispatch
      ),
    [dispatch]
  );

  return {
    ...actions,
    state,
    isAuthenticated: !!state.profile.result,
    profile: state.profile.result,
    isLoading: state.profile.isLoading,
    error: state.profile.error,
  };
};

export default useAuth;
