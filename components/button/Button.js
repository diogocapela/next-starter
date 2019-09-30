import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import theme from '#theme';

const ButtonElement = styled.button`
  align-items: center;
  justify-content: center;
  display: inline-flex;
  padding: 0 1rem;
  color: ${theme.colors.white};
  background: ${theme.colors.black};
  min-width: 15rem;
  height: 5rem;
  border: 0.1rem solid black;
  border-radius: 0.4rem;
  letter-spacing: 0.05rem;
  transition: all 0.2s ease-in;

  &:hover {
    color: ${theme.colors.black};
    background: ${theme.colors.white};
    text-decoration: none;
  }
`;

function Button({ children, ...rest }) {
  return <ButtonElement {...rest}>{children}</ButtonElement>;
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Button;
