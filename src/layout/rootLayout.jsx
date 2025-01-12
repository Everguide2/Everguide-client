import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const RootLayout = () => {
  return (
    <>
    <Header/>
    <Wrapper>
      <Outlet/>
    </Wrapper>
    <Footer/>
    </>
  );
};

export default RootLayout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: ${(props) => props.theme.size.max_witdh};
  margin: 0 auto;
`