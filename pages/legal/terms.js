import React from 'react';
import styled from '@emotion/styled';

import PageSEO from '#components/page-seo';
import Container from '#components/container';

import theme from '#theme';

const H1 = styled.h1`
  color: ${theme.colors.black};
`;

const P = styled.p`
  color: ${theme.colors.black};
`;

function Terms() {
  return (
    <Container>
      <PageSEO title="Terms and Conditions" />
      <H1>Terms and Conditions</H1>
      <hr />
      <P>Content goes here...</P>
    </Container>
  );
}

export default Terms;
