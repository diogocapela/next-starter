import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Input = styled.input`
  display: inline-block;
  width: auto;

  &:hover {
    cursor: pointer;
  }
`;

const Checkbox = (props) => {
  const { checked, onChange, ...rest } = props;
  return <Input type="checkbox" checked={checked} onChange={onChange} {...rest} />;
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  checked: false,
  onChange: () => undefined,
};

export default Checkbox;
