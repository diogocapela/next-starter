import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Label = styled.label`
  display: inline-block;
`;

const Span = styled.span`
  display: block;
  margin-bottom: 0.5rem;
`;

const InputElement = styled.input``;

function Input({ label, placeholder, type = 'text', ...rest }) {
  if (!label) {
    return <InputElement {...rest} />;
  }

  return (
    <Label {...rest}>
      <Span>{label}</Span>
      <InputElement type={type} placeholder={placeholder} />
    </Label>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
