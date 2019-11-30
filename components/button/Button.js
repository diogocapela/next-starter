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
  min-width: 10rem;
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

const Button = props => {
  const { children, loading = false, ...rest } = props;

  return <ButtonElement {...rest}>{loading ? 'Loading...' : children}</ButtonElement>;
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  loading: PropTypes.bool,
};

export default Button;
