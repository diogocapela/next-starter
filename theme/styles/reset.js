import { css } from '@emotion/core';

export default css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
    vertical-align: middle;
  }

  svg {
    max-width: 100%;
    vertical-align: middle;
  }

  iframe {
    max-width: 100%;
  }

  video {
    max-width: 100%;
  }

  object {
    max-width: 100%;
  }

  b {
    font-weight: bold;
  }

  strong {
    font-weight: bold;
  }

  a {
    cursor: pointer;
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }

  button {
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }

  select {
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }

  input {
    &:disabled {
      cursor: not-allowed;
    }
  }

  textarea {
    resize: none;

    &:disabled {
      cursor: not-allowed;
    }
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  ol {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  h1 {
    margin: 0;
    padding: 0;
  }

  h2 {
    margin: 0;
    padding: 0;
  }

  h3 {
    margin: 0;
    padding: 0;
  }

  h4 {
    margin: 0;
    padding: 0;
  }

  h5 {
    margin: 0;
    padding: 0;
  }

  h6 {
    margin: 0;
    padding: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  blockquote {
    quotes: none;
  }

  q {
    quotes: none;
  }

  article {
    display: block;
  }

  aside {
    display: block;
  }

  details {
    display: block;
  }

  figcaption {
    display: block;
  }

  figure {
    display: block;
  }

  footer {
    display: block;
  }

  header {
    display: block;
  }

  hgroup {
    display: block;
  }

  menu {
    display: block;
  }

  nav {
    display: block;
  }

  section {
    display: block;
  }
`;
