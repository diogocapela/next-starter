import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Layout from '@ns/layouts/empty-layout';
import PageSEO from '@ns/components/page-seo';
import theme from '@ns/theme';

const H1 = styled.h1`
  color: ${theme.colors.black};
  text-align: center;
  font-weight: bold;
`;

const P = styled.p`
  color: ${theme.colors.black};
  text-align: center;
  font-size: 2rem;
`;

const ErrorPage = (props) => {
  const { statusCode } = props;

  return (
    <Layout>
      <PageSEO title={`Error ${statusCode}`} />
      <H1>{statusCode}</H1>
      <P>Whoops, something went wrong!</P>
    </Layout>
  );
};

ErrorPage.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;

  return { statusCode };
};

ErrorPage.propTypes = {
  statusCode: PropTypes.number,
};

export default ErrorPage;
