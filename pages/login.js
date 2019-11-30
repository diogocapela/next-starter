import React from 'react';
import Layout from '#layouts/auth-layout';
import onlyGuest from '#hoc/onlyGuest';
import LoginForm from '#components/forms/login';

const LoginPage = () => {
  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
};

export default onlyGuest(LoginPage);
