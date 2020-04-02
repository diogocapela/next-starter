import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Iframe = styled.iframe`
  border: 0;
  width: 600px;
  height: 450px;
  max-width: 100%;
`;

const GoogleMap = (props) => {
  const { src, allowFullScreen, ...rest } = props;

  return (
    <Iframe
      src={src}
      frameBorder={0}
      allowFullScreen={allowFullScreen}
      aria-hidden={false}
      tabIndex={0}
      {...rest}
    />
  );
};

GoogleMap.propTypes = {
  src: PropTypes.string,
  allowFullScreen: PropTypes.bool,
};

GoogleMap.defaultProps = {
  src:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.189105408164!2d-6.238413083978694!3d53.33987098289707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485ab4af636e3bcb%3A0xc4c697949b4049f6!2sGoogle!5e0!3m2!1spt-PT!2spt!4v1585839465078!5m2!1spt-PT!2spt',
  allowFullScreen: false,
};

export default GoogleMap;
