import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Layout from '@ns/layouts/empty-layout';
import PageSEO from '@ns/components/page-seo';
import theme from '@ns/theme';

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
