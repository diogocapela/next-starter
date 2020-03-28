import { css } from '@emotion/core';

import theme from '../';

export default css`
  &::selection {
    color: ${theme.colors.white};
    background: ${theme.colors.black};
  }

  html {
    background: ${theme.colors.lightGrey1};
  }

  body {
    font-family: ${theme.fonts.sans};
  }

  b,
  strong {
    font-weight: ${theme.weights.bold};
  }

  code {
    font-family: ${theme.fonts.monospace};
  }
`;
