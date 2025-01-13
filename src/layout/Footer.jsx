import React from 'react';
import { styled } from "styled-components"

const Footer = () => {
  return (
    <Container>
      <FooterContainer>푸터영역</FooterContainer>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray[50]};
`

const FooterContainer = styled.div`
  width: ${(props) => props.theme.size.safeArea};  
  height: 184px;
  margin: 0 auto;
`