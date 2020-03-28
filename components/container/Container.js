import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import theme from '@ns/theme';

const WrapperDiv = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  ${theme.medias.extraSmall} {
    max-width: 540px;
  }

  ${theme.medias.small} {
    max-width: 720px;
  }

  ${theme.medias.medium} {
    max-width: 960px;
  }

  ${theme.medias.large} {
    max-width: 1140px;
  }
`;

const Container = (props) => {
  return <WrapperDiv {...props} />;
};

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
