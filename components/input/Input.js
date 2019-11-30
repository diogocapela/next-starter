import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import theme from '#theme';

const InputElement = styled.input`
  width: 40rem;
  max-width: 100%;
  border-radius: 0.4rem;
  border: 0.1rem solid ${theme.colors.black};
  padding: 1rem;
`;

const Input = props => {
  const {
    type = 'text',
    name,
    placeholder,
    onChange,
    onFocus,
    onBlur,
    required = false,
    disabled = false,
    ...rest
  } = props;

  return (
    <InputElement
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      required={required}
      disabled={disabled}
      {...rest}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Input;
