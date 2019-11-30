import React from 'react';
import Layout from '#layouts/auth-layout';
import onlyGuest from '#hoc/onlyGuest';
import RegisterForm from '#components/forms/register';

const RegisterPage = () => {
  return (
    <Layout>
      <RegisterForm />
    </Layout>
  );
};

export default onlyGuest(RegisterPage);
