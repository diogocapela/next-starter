import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import NextApp from 'next/app';
import NextHead from 'next/head';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';

import {
  WEBSITE_NAME,
  WEBSITE_DESCRIPTION,
  WEBSITE_URL,
  WEBSITE_THUMBNAIL,
} from '#config/settings';

// Redux Store
import withStore from '#redux/withStore';

// Global Styles
import globalStyles from '#theme/styles';

// Components
import Navbar from '#components/navbar';
import Footer from '#components/footer';
import CookieBanner from '#components/cookie-banner';

const MainWrapper = styled.main`
  min-height: 65vh;
`;

class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router, reduxStore } = this.props;

    return (
      <Provider store={reduxStore}>
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
        <Fragment>
          <Navbar />
          <MainWrapper>
            <Component {...pageProps} />
          </MainWrapper>
          <Footer />
          <CookieBanner />
        </Fragment>
      </Provider>
    );
  }
}

export default withStore(App);
