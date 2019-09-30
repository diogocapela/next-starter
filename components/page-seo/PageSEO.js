import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { WEBSITE_NAME, WEBSITE_DESCRIPTION, WEBSITE_THUMBNAIL } from '#config/settings';

function SEO(props) {
  const { title, description = WEBSITE_DESCRIPTION, thumbnail = WEBSITE_THUMBNAIL } = props;

  const curatedTitle = title ? `${title} | ${WEBSITE_NAME}` : WEBSITE_NAME;

  return (
    <Head>
      <title>{curatedTitle}</title>
      <meta name="twitter:title" content={curatedTitle} />
      <meta property="og:title" content={curatedTitle} />
      <meta itemProp="name" content={curatedTitle} />

      <meta name="description" content={description} />
      <meta name="summary" content={description} />
      <meta name="subject" content={description} />
      <meta name="topic" content={description} />
      <meta name="abstract" content={description} />
      <meta name="twitter:description" content={description} />
      <meta property="og:description" content={description} />
      <meta itemProp="description" content={description} />

      <meta name="twitter:image:src" content={thumbnail} />
      <meta property="og:image" content={thumbnail} />
      <meta itemProp="image" content={thumbnail} />
    </Head>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  thumbnail: PropTypes.string,
};

export default SEO;
