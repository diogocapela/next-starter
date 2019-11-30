import React from 'react';
import styled from '@emotion/styled';
import { WEBSITE_NAME } from '#config/settings';
import Container from '#components/container';
import Link from '#components/link';

const WrapperFooter = styled.footer`
  padding: 3.5rem 0;
`;

const StyledContainer = styled(Container)`
  text-align: center;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  margin: 0 auto;
  padding-top: 1rem;
`;

const Li = styled.li`
  padding-left: 1rem;
  padding-right: 1rem;
  border-right: 1px solid black;

  &:first-of-type {
    padding-left: 0;
  }

  &:last-of-type {
    padding-right: 0;
    border-right: 0;
  }
`;

const FOOTER_LINKS = [
  { url: '/', title: 'Home' },
  { url: '/legal/privacy', title: 'Privacy' },
  { url: '/legal/terms', title: 'Terms' },
];

const Footer = () => {
  return (
    <WrapperFooter>
      <StyledContainer>
        <Link href="/">{WEBSITE_NAME}</Link> © {new Date().getFullYear()}
        <Ul>
          {FOOTER_LINKS.map(({ url, title }) => (
            <Li key={title}>
              <Link href={url}>{title}</Link>
            </Li>
          ))}
        </Ul>
      </StyledContainer>
    </WrapperFooter>
  );
};

export default Footer;
