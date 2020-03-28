import React from 'react';
import styled from '@emotion/styled';

import Layout from '@ns/layouts/main-layout';
import PageSEO from '@ns/components/page-seo';
import Container from '@ns/components/container';

import theme from '@ns/theme';

const H1 = styled.h1`
  color: ${theme.colors.black};
  margin-bottom: 2rem;
`;

const AboutPage = () => {
  return (
    <Layout>
      <PageSEO title="About" />
      <Container>
        <H1>About</H1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </Container>
    </Layout>
  );
};

export default AboutPage;
