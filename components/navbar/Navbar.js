import React from 'react';
import styled from '@emotion/styled';

import { WEBSITE_NAME } from '@ns/config/settings';
import Container from '@ns/components/container';
import Link from '@ns/components/link';
import theme from '@ns/theme';

const WrapperNav = styled.nav`
  background: ${theme.colors.lightGrey1};
  position: sticky;
  top: 0;
`;

const StyledContainer = styled(Container)`
  height: ${theme.variables.navbarHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoStyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 2rem;
`;

const LogoSpan = styled.span`
  padding-left: 0.5rem;
  font-weight: ${theme.weights.bold};
`;

const Ul = styled.ul`
  display: flex;
`;

const Li = styled.li`
  &:not(:last-child) {
    margin-right: 0.75rem;
  }
`;

const StyledLink = styled(Link)`
  color: ${theme.colors.black};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const NAVBAR_LINKS = [
  { url: '/about', title: 'About' },
  { url: '/posts', title: 'Posts' },
  { url: '/404', title: '404' },
];

const Navbar = () => {
  return (
    <WrapperNav>
      <StyledContainer>
        <LogoStyledLink href="/">
          <LogoImg src="/img/favicon.ico" alt="Next Starter" />
          <LogoSpan>{WEBSITE_NAME}</LogoSpan>
        </LogoStyledLink>
        <Ul>
          {NAVBAR_LINKS.map(({ url, title }, i) => (
            <Li key={i}>
              <StyledLink href={url}>{title}</StyledLink>
            </Li>
          ))}
        </Ul>
      </StyledContainer>
    </WrapperNav>
  );
};

export default Navbar;
