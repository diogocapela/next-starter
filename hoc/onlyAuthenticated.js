import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '#redux';

const onlyAuthenticated = WrappedComponent => {
  const OnlyAuthenticatedHOC = props => {
    const { profile } = useAuth();
    const router = useRouter();

    const isAuthenticated = !!profile;

    useEffect(() => {
      if (!isAuthenticated) {
        router.push('/');
      }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return OnlyAuthenticatedHOC;
};

export default onlyAuthenticated;
