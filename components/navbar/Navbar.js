import React from 'react';
import styled from '@emotion/styled';

import { NAVBAR_LINKS } from '#config/settings';

import Container from '#components/container';
import Link from '#components/link';

import theme from '#theme';

const WrapperNav = styled.nav`
  background: ${theme.colors.lightGrey1};
  margin-bottom: 2rem;
`;

const StyledContainer = styled(Container)`
  height: ${theme.variables.navbarHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 3rem;
`;

const LogoSpan = styled.span`
  padding-left: 0.5rem;
  font-weight: ${theme.weights.bold};
`;

const Ul = styled.ul`
  display: flex;
`;

const Li = styled.li`
  :not(:last-child) {
    margin-right: 0.75rem;
  }
`;

const LogoStyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: ${theme.colors.black};
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

// eslint-disable-next-line react/prop-types
const renderLink = ({ url, title }, i) => (
  <Li key={i}>
    <StyledLink href={url}>{title}</StyledLink>
  </Li>
);

function Navbar() {
  return (
    <WrapperNav>
      <StyledContainer>
        <LogoStyledLink href="/">
          <LogoImg src="/static/img/favicon.ico" alt="next-starter" />
          <LogoSpan>Home Page</LogoSpan>
        </LogoStyledLink>
        <Ul>{NAVBAR_LINKS.map(renderLink)}</Ul>
      </StyledContainer>
    </WrapperNav>
  );
}

export default Navbar;
