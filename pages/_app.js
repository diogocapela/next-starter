import React from 'react';
import { Provider } from 'react-redux';
import NextApp from 'next/app';
import NextHead from 'next/head';
import { Global } from '@emotion/core';
import {
  WEBSITE_NAME,
  WEBSITE_DESCRIPTION,
  WEBSITE_URL,
  WEBSITE_THUMBNAIL,
} from '#config/settings';
import withStore from '#redux/withStore';
import globalStyles from '#theme/styles';

class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router, store } = this.props;

    return (
      <Provider store={store}>
        <NextHead>
          <title>{WEBSITE_NAME}</title>
          <meta name="twitter:title" content={WEBSITE_NAME} />
          <meta property="og:title" content={WEBSITE_NAME} />
          <meta itemProp="name" content={WEBSITE_NAME} />

          <meta name="description" content={WEBSITE_DESCRIPTION} />
          <meta name="summary" content={WEBSITE_DESCRIPTION} />
          <meta name="subject" content={WEBSITE_DESCRIPTION} />
          <meta name="topic" content={WEBSITE_DESCRIPTION} />
          <meta name="abstract" content={WEBSITE_DESCRIPTION} />
          <meta name="twitter:description" content={WEBSITE_DESCRIPTION} />
          <meta property="og:description" content={WEBSITE_DESCRIPTION} />
          <meta itemProp="description" content={WEBSITE_DESCRIPTION} />

          <meta name="twitter:image:src" content={WEBSITE_THUMBNAIL} />
          <meta property="og:image" content={WEBSITE_THUMBNAIL} />
          <meta itemProp="image" content={WEBSITE_THUMBNAIL} />

          <meta name="url" content={`${WEBSITE_URL}${router.route}`} />
          <meta property="og:url" content={`${WEBSITE_URL}${router.route}`} />

          <link rel="canonical" href={`${WEBSITE_URL}${router.route}`} />
          <link rel="shortlink" href={`${WEBSITE_URL}${router.route}`} />
        </NextHead>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withStore(App);
