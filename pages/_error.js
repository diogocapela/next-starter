import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import PageSEO from '#components/page-seo';
import Container from '#components/container';

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

    return (
      <Container>
        <PageSEO title={statusCode ? `Server Error ${statusCode}` : 'Client Error'} />
        <H1>{statusCode ? `Error ${statusCode}` : 'Error'}</H1>
        <p>
          {statusCode
            ? `A ${statusCode} error occurred on server.`
            : 'An error occurred on client.'}
        </p>
      </Container>
    );
  }
}

Error.propTypes = {
  statusCode: PropTypes.number,
};

export default Error;
