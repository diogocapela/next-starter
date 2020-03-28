import React from 'react';
import styled from '@emotion/styled';

import { WEBSITE_NAME } from '@ns/config/settings';
import Container from '@ns/components/container';
import Link from '@ns/components/link';

const WrapperFooter = styled.footer`
  padding: 3.5rem 0;
`;

const StyledContainer = styled(Container)`
  text-align: center;
`;

const Footer = () => {
  return (
    <WrapperFooter>
      <StyledContainer>
        <Link href="/">{WEBSITE_NAME}</Link> © {new Date().getFullYear()}
      </StyledContainer>
    </WrapperFooter>
  );
};

export default Footer;
