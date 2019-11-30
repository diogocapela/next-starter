import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Input = styled.input`
  width: auto;

  &:hover {
    cursor: pointer;
  }
`;

const Checkbox = props => {
  const { checked, ...rest } = props;
  return <Input type="checkbox" checked={checked} {...rest} />;
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
};

export default Checkbox;
