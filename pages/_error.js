import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Layout from '#layouts/main-layout';
import PageSEO from '#components/page-seo';
import theme from '#theme';

const H1 = styled.h1`
  color: ${theme.colors.black};
  margin-bottom: 2rem;
`;

class Error extends Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;

    return { statusCode };
  }

  render() {
    const { statusCode } = this.props;

    const message = statusCode
      ? `${statusCode} Whoops, Something Went Wrong`
      : 'Whoops, Something Went Wrong';

    return (
      <Layout>
        <PageSEO title={statusCode ? `Server Error ${statusCode}` : 'Client Error'} />
        <H1>{message}</H1>
      </Layout>
    );
  }
}

Error.propTypes = {
  statusCode: PropTypes.number,
};

export default Error;
