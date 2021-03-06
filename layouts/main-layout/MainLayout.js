import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Navbar from '@ns/components/navbar';
import Footer from '@ns/components/footer';
import theme from '@ns/theme';

const Div = styled.div`
  background: ${theme.colors.white};
  padding-top: 2rem;
  padding-bottom: 3rem;
`;

const MainLayout = (props) => {
  const { children } = props;

  return (
    <>
      <Navbar />
      <Div>{children}</Div>
      <Footer />
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;
