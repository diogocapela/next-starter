import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

const GoogleAnalytics = (props) => {
  const { id } = props;

  const [hasLoaded, setHasLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    ReactGA.initialize(id);
    setHasLoaded(true);
  }, [id]);

  if (hasLoaded) {
    ReactGA.pageview(router.pathname);
  }

  return null;
};

GoogleAnalytics.propTypes = {
  id: PropTypes.string,
};

GoogleAnalytics.defaultProps = {
  id: 'UA-87908371-4',
};

export default GoogleAnalytics;
