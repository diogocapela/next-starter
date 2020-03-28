import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { WEBSITE_NAME } from '@ns/config/settings';
import Container from '@ns/components/container';
import Link from '@ns/components/link';
import theme from '@ns/theme';

const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 520px;
  max-width: 100%;
`;

const Img = styled.img`
  width: 3rem;
  margin-bottom: 1.25rem;

  ${theme.medias.gteMedium} {
    width: 3.5rem;
  }
`;

const EmptyLayout = (props) => {
  const { children } = props;

  return (
    <WrapperDiv>
      <StyledContainer>
        <Link href="/">
          <Img src="/img/favicon.ico" alt={WEBSITE_NAME} />
        </Link>
        {children}
      </StyledContainer>
    </WrapperDiv>
  );
};

EmptyLayout.propTypes = {
  children: PropTypes.any,
};

export default EmptyLayout;
