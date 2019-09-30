import React from 'react';
import styled from '@emotion/styled';

import { WEBSITE_NAME, LEGAL_LINKS } from '#config/settings';

import Container from '#components/container';
import Link from '#components/link';

const WrapperFooter = styled.footer`
  padding: 7rem 0;
`;

const StyledContainer = styled(Container)`
  text-align: center;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  max-width: 150px;
  margin: 0 auto;
  padding-top: 1rem;
`;

function Footer() {
  return (
    <WrapperFooter>
      <StyledContainer>
        <Link href="/">{WEBSITE_NAME}</Link> © {new Date().getFullYear()}
        <Ul>
          {LEGAL_LINKS.map(({ url, title }) => (
            <li key={title}>
              <Link href={url}>{title}</Link>
            </li>
          ))}
        </Ul>
      </StyledContainer>
    </WrapperFooter>
  );
}

export default Footer;
