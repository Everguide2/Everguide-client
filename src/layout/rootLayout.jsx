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
  max-width: ${({theme}) => theme.size.safeArea};
  background-color: ${({theme}) => theme.colors.white};
  margin: 0 auto;
  
  div{
    height: 2000px;
  }
`