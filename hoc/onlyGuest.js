import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import useAuth from '#hooks/useAuth';

const onlyAuthenticated = WrappedComponent => {
  const OnlyAuthenticatedHOC = props => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (isAuthenticated) {
        router.push('/dashboard');
      }
    }, [isAuthenticated, router]);

    if (isAuthenticated) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return OnlyAuthenticatedHOC;
};

export default onlyAuthenticated;
