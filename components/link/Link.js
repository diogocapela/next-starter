/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import noop from 'lodash/noop';

function Link({
  children,
  as,
  href,
  title,
  onClick = noop,
  target = '_self',
  keep = false,
  ...remainingProps
}) {
  const isExternal =
    !href || href.startsWith('tel') || href.startsWith('mailto') || href.startsWith('http');

  const handleClick = () => {
    if (!keep && !isExternal) {
      window && window.scrollTo(0, 0);
    }

    onClick();
  };

  return isExternal ? (
    <a
      aria-label={title}
      as={as}
      title={title}
      href={href}
      target={target}
      rel={target === '_blank' && 'noopener noreferrer'}
      onClick={handleClick}
      {...remainingProps}
    >
      {children}
    </a>
  ) : (
    <NextLink as={as} href={href}>
      <a aria-label={title} title={title} onClick={handleClick} {...remainingProps}>
        {children}
      </a>
    </NextLink>
  );
}

Link.propTypes = {
  children: PropTypes.any,
  as: PropTypes.any,
  href: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
  keep: PropTypes.bool,
};

export default Link;
