import React from 'react';
import { Provider } from 'react-redux';
import NextApp from 'next/app';
import NextHead from 'next/head';
import { Global } from '@emotion/core';

import {
  WEBSITE_NAME,
  WEBSITE_DESCRIPTION,
  WEBSITE_URL,
  WEBSITE_ICON,
  WEBSITE_THUMBNAIL,
  WEBSITE_LANGUAGE,
  WEBSITE_COUNTRY,
  WEBSITE_CITY,
  WEBSITE_EMAIL,
  WEBSITE_PHONE,
  WEBSITE_KEYWORDS,
  WEBSITE_TWITTER,
  WEBSITE_BROWSER_THEME_COLOR,
} from '@ns/config/settings';
import withStore from '@ns/redux/withStore';
import globalStyles from '@ns/theme/styles';
import CookieBanner from '@ns/components/cookie-banner';
import GoogleAnalytics from '@ns/components/google-analytics';

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
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="format-detection" content="telephone=no" />

          {/* Manifest */}
          <link rel="manifest" href="/manifest.json" />

          {/* Icon */}
          <link rel="shortcut icon" href={WEBSITE_ICON} />
          <link rel="icon" type="image/x-icon" href={WEBSITE_ICON} />

          {/* Browser Theme */}
          <meta name="theme-color" content={WEBSITE_BROWSER_THEME_COLOR} />

          {/* SEO */}
          <meta name="robots" content="index, follow" />
          <meta name="keywords" content={WEBSITE_KEYWORDS} />

          {/* Language */}
          <meta name="language" content={WEBSITE_LANGUAGE} />

          {/* Location */}
          <meta name="og:country-name" content={WEBSITE_COUNTRY} />
          <meta name="og:locality" content={WEBSITE_CITY} />

          {/* Email */}
          <meta name="reply-to" content={WEBSITE_EMAIL} />
          <meta name="og:email" content={WEBSITE_EMAIL} />

          {/* Phone */}
          <meta name="og:phone_number" content={WEBSITE_PHONE} />

          {/* Name */}
          <meta name="author" content={WEBSITE_NAME} />
          <meta name="copyright" content={WEBSITE_NAME} />
          <meta name="designer" content={WEBSITE_NAME} />
          <meta name="owner" content={WEBSITE_NAME} />
          <meta property="og:site_name" content={WEBSITE_NAME} />

          {/* Twitter */}
          <meta name="twitter:site" content={WEBSITE_TWITTER} />
          <meta name="twitter:creator" content={WEBSITE_TWITTER} />

          {/* Page Title */}
          <title>{WEBSITE_NAME}</title>
          <meta name="twitter:title" content={WEBSITE_NAME} />
          <meta property="og:title" content={WEBSITE_NAME} />
          <meta itemProp="name" content={WEBSITE_NAME} />

          {/* Page Description */}
          <meta name="description" content={WEBSITE_DESCRIPTION} />
          <meta name="summary" content={WEBSITE_DESCRIPTION} />
          <meta name="subject" content={WEBSITE_DESCRIPTION} />
          <meta name="topic" content={WEBSITE_DESCRIPTION} />
          <meta name="abstract" content={WEBSITE_DESCRIPTION} />
          <meta name="twitter:description" content={WEBSITE_DESCRIPTION} />
          <meta property="og:description" content={WEBSITE_DESCRIPTION} />
          <meta itemProp="description" content={WEBSITE_DESCRIPTION} />

          {/* Page Thumbnail */}
          <meta name="twitter:image:src" content={WEBSITE_THUMBNAIL} />
          <meta property="og:image" content={WEBSITE_THUMBNAIL} />
          <meta itemProp="image" content={WEBSITE_THUMBNAIL} />

          {/* Page URL */}
          <meta name="url" content={`${WEBSITE_URL}${router.route}`} />
          <meta property="og:url" content={`${WEBSITE_URL}${router.route}`} />
          <link rel="canonical" href={`${WEBSITE_URL}${router.route}`} />
          <link rel="shortlink" href={`${WEBSITE_URL}${router.route}`} />

          {/* Miscellaneous */}
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
        </NextHead>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
        <CookieBanner />
        <GoogleAnalytics />
      </Provider>
    );
  }
}

export default withStore(App);
