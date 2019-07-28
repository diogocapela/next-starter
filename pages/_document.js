import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import { WEBSITE_NAME } from '../config/settings';
import socialLinks from '../config/socialLinks';

class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const TWITTER_USERNAME = socialLinks.twitter.url.split('/')[3];

    return (
      <Html lang="en">
        <Head>
          <meta name="language" content="en" />

          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="format-detection" content="telephone=no" />

          <meta name="theme-color" content="#000000" />

          <link rel="shortcut icon" href="/static/img/favicon.ico" />
          <link rel="icon" type="image/x-icon" href="/static/img/favicon.ico" />

          <link rel="manifest" href="/static/manifest.json" />

          <meta name="robots" content="index, follow" />

          <meta name="author" content={WEBSITE_NAME} />
          <meta name="copyright" content={WEBSITE_NAME} />
          <meta name="designer" content={WEBSITE_NAME} />
          <meta name="owner" content={WEBSITE_NAME} />

          <meta name="keywords" content="next, starter, react, redux" />

          <meta property="og:site_name" content={WEBSITE_NAME} />
          <meta property="og:type" content="website" />

          <meta name="twitter:site" content={`@${TWITTER_USERNAME}`} />
          <meta name="twitter:creator" content={`@${TWITTER_USERNAME}`} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
