import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Div = styled.div`
  ${({ size }) =>
    css`
      height: ${size}rem;
    `}
`;

const Spacer = (props) => {
  const { size, ...rest } = props;

  return <Div size={size} {...rest} />;
};

Spacer.propTypes = {
  size: PropTypes.number,
};

export default Spacer;
