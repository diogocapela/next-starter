import { css } from '@emotion/core';

export default css`
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
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
  }

  /* ensure responsive assets */

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

  /* set strong and b elements */

  b {
    font-weight: bold;
  }

  strong {
    font-weight: bold;
  }

  /* fix cursor pointer */

  a {
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }

  select {
    cursor: pointer;
  }

  /* remove lists default style */

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

  /* remove margins and paddings from paragraphs and headings */

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

  /* normalize tables */

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* fix quotes */

  blockquote {
    quotes: none;
  }

  q {
    quotes: none;
  }

  /* HTML5 display-role reset for older browsers */

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
