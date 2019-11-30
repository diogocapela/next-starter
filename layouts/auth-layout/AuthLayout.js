import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Container from '#components/container';
import Link from '#components/link';
import theme from '#theme';

const WrapperDiv = styled.div`
  background: ${theme.colors.lightGrey1};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 480px;
  max-width: 100%;
`;

const LettersImg = styled.img`
  width: 100%;
  max-width: 12rem;
  margin-bottom: 1.25rem;

  ${theme.medias.gteMedium} {
    max-width: 18rem;
  }
`;

const AuthLayout = props => {
  const { children } = props;

  return (
    <WrapperDiv>
      <StyledContainer>
        <Link href="/">
          <LettersImg src="/static/img/favicon.ico" alt="Next Starter" />
        </Link>
        {children}
      </StyledContainer>
    </WrapperDiv>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.any,
};

export default AuthLayout;
