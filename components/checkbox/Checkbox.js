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
  const { onChange, ...rest } = props;

  return <Input type="checkbox" onChange={onChange} {...rest} />;
};

Checkbox.propTypes = {
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  onChange: () => undefined,
};

export default Checkbox;
