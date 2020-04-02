import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

import {
  get as getUserAcceptsCookies,
  set as setUserAcceptsCookies,
} from '@ns/cookies/userAcceptsCookies';
import Button from '@ns/components/button';
import theme from '@ns/theme';

const slide = keyframes`
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(0);
    }
`;

const WrapperDiv = styled.div`
  color: ${theme.colors.black};
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  padding: 1.5rem;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.black};
  border-radius: 0.75rem;
  box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.09);
  width: 60vw;
  max-width: 900px;
  z-index: ${theme.layers.cookieBanner};
  animation: ${slide} 0.4s ease-in-out forwards;

  ${theme.medias.gteSmall} {
    width: 70vw;
  }

  p {
    line-height: 1.35;
    margin-bottom: 0.75rem;
    font-size: 0.85rem;

    ${theme.medias.gteSmall} {
      font-size: 1rem;
      text-align: justify;
    }
  }
`;

const CloseButton = styled(Button)``;

const CookieBanner = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setUserAcceptsCookies('true');
  };

  useEffect(() => {
    setTimeout(() => {
      const shouldShow = !getUserAcceptsCookies();

      if (shouldShow) {
        setIsOpen(true);
      }
    }, 5000);
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <WrapperDiv>
      <div>
        <p>
          This site uses first and third party cookies to provide you with a great user experience.
          By using this site you accept our use of cookies. For more details about cookies and how
          to manage them, see our privacy policy.
        </p>
        <CloseButton onClick={handleClose}>Accept Cookies</CloseButton>
      </div>
    </WrapperDiv>
  );
};

export default CookieBanner;
