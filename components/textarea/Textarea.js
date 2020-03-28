import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import theme from '@ns/theme';

const TextareaElement = styled.textarea`
  width: 40rem;
  max-width: 100%;
  border-radius: 0.4rem;
  border: 0.1rem solid ${theme.colors.black};
  padding: 1rem;
`;

const Textarea = (props) => {
  const { rows, name, placeholder, onChange, onFocus, onBlur, required, disabled, ...rest } = props;

  return (
    <TextareaElement
      rows={rows}
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

Textarea.propTypes = {
  rows: PropTypes.number,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

Textarea.defaultProps = {
  rows: 4,
  onChange: () => undefined,
  onFocus: () => undefined,
  onBlur: () => undefined,
  required: false,
  disabled: false,
};

export default Textarea;
