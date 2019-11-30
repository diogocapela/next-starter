import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Layout from '#layouts/auth-layout';
import PageSEO from '#components/page-seo';
import theme from '#theme';

const H1 = styled.h1`
  color: ${theme.colors.black};
  text-align: center;
`;

const P = styled.p`
  color: ${theme.colors.black};
  text-align: center;
  font-size: 2rem;
`;

class Error extends Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;

    return { statusCode };
  }

  render() {
    const { statusCode } = this.props;

    return (
      <Layout>
        <PageSEO title={statusCode ? `Server Error ${statusCode}` : 'Client Error'} />
        <H1>{statusCode}</H1>
        <P>Whoops, Something Went Wrong!</P>
      </Layout>
    );
  }
}

Error.propTypes = {
  statusCode: PropTypes.number,
};

export default Error;
