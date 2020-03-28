import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import styled from '@emotion/styled';

const A = styled.a`
  display: inline-block;
`;

const Link = (props) => {
  const { children, as, href, title, onClick, target, keep, ...rest } = props;

  const isExternal =
    !href || href.startsWith('tel') || href.startsWith('mailto') || href.startsWith('http');

  const handleClick = () => {
    if (!keep && !isExternal) {
      window && window.scrollTo(0, 0);
    }

    onClick();
  };

  return isExternal ? (
    <A
      aria-label={title}
      as={as}
      title={title}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : ''}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </A>
  ) : (
    <NextLink as={as} href={href}>
      <A aria-label={title} title={title} onClick={handleClick} {...rest}>
        {children}
      </A>
    </NextLink>
  );
};

Link.propTypes = {
  children: PropTypes.any,
  as: PropTypes.any,
  href: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
  keep: PropTypes.bool,
};

Link.defaultProps = {
  onClick: () => undefined,
  target: '_self',
  keep: false,
};

export default Link;
