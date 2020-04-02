import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { WEBSITE_NAME, WEBSITE_DESCRIPTION, WEBSITE_THUMBNAIL } from '@ns/config/settings';

const PageSEO = (props) => {
  const { title, description, thumbnail } = props;

  const curatedTitle = title ? `${title} | ${WEBSITE_NAME}` : WEBSITE_NAME;

  return (
    <Head>
      {/* Page Title */}
      <title>{curatedTitle}</title>
      <meta name="twitter:title" content={curatedTitle} />
      <meta property="og:title" content={curatedTitle} />
      <meta itemProp="name" content={curatedTitle} />

      {/* Page Description */}
      <meta name="description" content={description} />
      <meta name="summary" content={description} />
      <meta name="subject" content={description} />
      <meta name="topic" content={description} />
      <meta name="abstract" content={description} />
      <meta name="twitter:description" content={description} />
      <meta property="og:description" content={description} />
      <meta itemProp="description" content={description} />

      {/* Page Thumbnail */}
      <meta name="twitter:image:src" content={thumbnail} />
      <meta property="og:image" content={thumbnail} />
      <meta itemProp="image" content={thumbnail} />
    </Head>
  );
};

PageSEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  thumbnail: PropTypes.string,
};

PageSEO.defaultProps = {
  description: WEBSITE_DESCRIPTION,
  thumbnail: WEBSITE_THUMBNAIL,
};

export default PageSEO;
