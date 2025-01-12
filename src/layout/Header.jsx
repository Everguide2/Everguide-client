import React from 'react';
import { styled } from 'styled-components';

const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <MainHeader></MainHeader>
        <SubHeader></SubHeader>
      </HeaderContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: sticky;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary[900]};
`

const HeaderContainer = styled.div`
  width: ${(props) => props.theme.size.max_witdh};  
  height: 184px;
  margin: 0 auto;
`
const MainHeader = styled.div`

`
const SubHeader = styled.div`
  
`