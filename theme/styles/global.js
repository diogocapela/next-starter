import { css } from '@emotion/core';

import theme from '../';

export default css`
  ::selection {
    color: ${theme.colors.white};
    background: ${theme.colors.black};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    /**
      * Font size 10px on default browser settings.
      * It's used as 62.5% to adapt to changes in the browser's default font-size.
      * Example: 27px -> 2.7rem
      */
    font-size: 62.5%;
    background: ${theme.colors.paleWhite};
  }

  body {
    margin: 0;
    overflow-x: hidden;
    font-size: 1.6rem;
    font-family: ${theme.fonts.sans};
    background: ${theme.colors.paleWhite};
  }

  img,
  svg {
    max-width: 100%;
    vertical-align: middle;
  }

  iframe,
  video,
  object {
    max-width: 100%;
  }

  b,
  strong {
    font-weight: ${theme.weights.bold};
  }

  code {
    font-family: ${theme.fonts.monospace};
  }

  a {
    color: black;
    text-decoration: none;
    transition: all 0.2s ease-in;

    &:hover {
      text-decoration: underline;
    }
  }

  a,
  button,
  select {
    cursor: pointer;
  }

  ul,
  ol,
  li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2.8rem;
  }

  h4 {
    font-size: 2.4rem;
  }

  h5 {
    font-size: 2rem;
  }

  h6 {
    font-size: 1.8rem;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  blockquote,
  q {
    quotes: none;
  }

  input,
  textarea {
    width: 40rem;
    max-width: 100%;
    border-radius: 0.4rem;
    border: 0.1rem solid ${theme.colors.black};
    padding: 1rem;
  }

  textarea {
    resize: none;
  }

  div,
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
`;
