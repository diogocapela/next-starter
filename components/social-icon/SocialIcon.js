import React from 'react';
import PropTypes from 'prop-types';
import BoxIcon from 'mdi-react/BoxIcon';
import LinkedInIcon from 'mdi-react/LinkedinIcon';
import GooglePlayIcon from 'mdi-react/GooglePlayIcon';
import TwitterIcon from 'mdi-react/TwitterIcon';
import YouTubeIcon from 'mdi-react/YoutubeIcon';
import FacebookIcon from 'mdi-react/FacebookIcon';
import InstagramIcon from 'mdi-react/InstagramIcon';
import PinterestIcon from 'mdi-react/PinterestIcon';
import MessengerIcon from 'mdi-react/FacebookMessengerIcon';
import styled from '@emotion/styled';

import { WEBSITE_NAME } from '@ns/config/settings';
import Link from '@ns/components/link';
import theme from '@ns/theme';

const SocialStyledLink = styled(Link)`
  color: ${theme.colors.darkGrey1};
  text-decoration: none;
  transition: all 0.2s ease-in;

  &:hover {
    color: ${theme.colors.darkGrey1};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const SocialIcon = (props) => {
  const { title, url, ...rest } = props;

  let Icon = BoxIcon;

  switch (title) {
    case 'LinkedIn':
      Icon = LinkedInIcon;
      break;
    case 'Google Play':
      Icon = GooglePlayIcon;
      break;
    case 'Twitter':
      Icon = TwitterIcon;
      break;
    case 'YouTube':
      Icon = YouTubeIcon;
      break;
    case 'Facebook':
      Icon = FacebookIcon;
      break;
    case 'Instagram':
      Icon = InstagramIcon;
      break;
    case 'Pinterest':
      Icon = PinterestIcon;
      break;
    case 'Messenger':
      Icon = MessengerIcon;
      break;
    default:
      Icon = BoxIcon;
  }

  return (
    <SocialStyledLink
      href={url}
      title={`${WEBSITE_NAME} on ${title}`}
      target="_blank"
      keep
      {...rest}
    >
      <Icon />
    </SocialStyledLink>
  );
};

SocialIcon.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};

export default SocialIcon;
