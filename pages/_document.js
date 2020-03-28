import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import { WEBSITE_LANGUAGE } from '@ns/config/settings';

class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang={WEBSITE_LANGUAGE}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
