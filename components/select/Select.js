import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import theme from '@ns/theme';

const SelectElement = styled.select`
  color: ${theme.colors.white};
  background: ${theme.colors.black};
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  min-width: 10rem;
  height: 3rem;
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

const Option = styled.option``;

const Select = (props) => {
  const { options, onChange, selected, ...rest } = props;
  return (
    <SelectElement onChange={onChange} value={selected} {...rest}>
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
  onChange: PropTypes.func,
  selected: PropTypes.any,
};

Select.defaultProps = {
  options: [],
  onChange: () => undefined,
};

export default Select;
