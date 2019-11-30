import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import theme from '#theme';

const SelectElement = styled.select`
  align-items: center;
  justify-content: center;
  display: inline-flex;
  padding: 0 1rem;
  color: ${theme.colors.white};
  background: ${theme.colors.black};
  width: 15rem;
  max-width: 100%;
  height: 5rem;
  border: 0.1rem solid black;
  border-radius: 0.4rem;
  letter-spacing: 0.05rem;
  transition: all 0.2s ease-in;

  &:hover {
    color: ${theme.colors.black};
    background: ${theme.colors.white};
  }
`;

const Option = styled.option``;

const Select = props => {
  const { options = [], ...rest } = props;
  return (
    <SelectElement {...rest}>
      {options.map(({ title, value }, i) => (
        <Option key={i} value={value}>
          {title || value}
        </Option>
      ))}
    </SelectElement>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
};

export default Select;
