import React from 'react';
import styled from '@emotion/styled';

import { WEBSITE_NAME, SOCIAL_LINKS } from '@ns/config/settings';
import Container from '@ns/components/container';
import SocialIcon from '@ns/components/social-icon';
import Link from '@ns/components/link';

const WrapperFooter = styled.footer`
  padding: 3.5rem 0;
`;

const StyledContainer = styled(Container)`
  text-align: center;
`;

const Ul = styled.ul`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Li = styled.li`
  margin-right: 0.5rem;

  &:last-of-type {
    margin-right: 0;
  }
`;

const Footer = () => {
  return (
    <WrapperFooter>
      <StyledContainer>
        <Link href="/">{WEBSITE_NAME}</Link> © {new Date().getFullYear()}
        <Ul>
          {SOCIAL_LINKS.map(({ title, url }) => (
            <Li key={title}>
              <SocialIcon title={title} url={url} />
            </Li>
          ))}
        </Ul>
      </StyledContainer>
    </WrapperFooter>
  );
};

export default Footer;
