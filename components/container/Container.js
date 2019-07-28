import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import theme from '../../theme';

const WrapperDiv = styled.div`
  width: 100%;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  margin-right: auto;
  margin-left: auto;

  ${theme.medias.extraSmall} {
    max-width: 54rem;
  }

  ${theme.medias.small} {
    max-width: 72rem;
  }

  ${theme.medias.medium} {
    max-width: 96rem;
  }

  ${theme.medias.large} {
    max-width: 114rem;
  }
`;

function Container(props) {
  return <WrapperDiv {...props} />;
}

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
