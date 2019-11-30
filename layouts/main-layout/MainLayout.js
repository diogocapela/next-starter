import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Navbar from '#components/navbar';
import Footer from '#components/footer';
import theme from '#theme';

const WrapperDiv = styled.div``;

const Div = styled.div`
  background: ${theme.colors.white};
  padding-top: 2rem;
  padding-bottom: 3rem;
`;

const MainLayout = props => {
  const { children } = props;

  return (
    <WrapperDiv>
      <Navbar />
      <Div>{children}</Div>
      <Footer />
    </WrapperDiv>
  );
};

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;
