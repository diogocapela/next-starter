import React from 'react';
import styled from '@emotion/styled';
import Layout from '#layouts/main-layout';
import PageSEO from '#components/page-seo';
import Container from '#components/container';

import theme from '#theme';

const H1 = styled.h1`
  color: ${theme.colors.black};
  margin-bottom: 2rem;
`;

const DashboardPage = () => {
  return (
    <Layout>
      <PageSEO title="Dashboard" />
      <Container>
        <H1>Dashboard</H1>
      </Container>
    </Layout>
  );
};

export default DashboardPage;
