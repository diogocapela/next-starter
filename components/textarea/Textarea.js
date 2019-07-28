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

const TextareaElement = styled.textarea`
  ${({ theme }) => theme.textarea};
`;

function Textarea({ label, placeholder, rows = 4, ...rest }) {
  if (!label) {
    return <TextareaElement {...rest} />;
  }

  return (
    <Label {...rest}>
      <Span>{label}</Span>
      <TextareaElement placeholder={placeholder} rows={rows} />
    </Label>
  );
}

Textarea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
};

export default Textarea;
