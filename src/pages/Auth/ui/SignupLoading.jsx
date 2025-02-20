import React from "react";
import styled from "styled-components";
import { icSignupLoading } from "@/assets"; 

const SignupLoading = () => {
  return (
    <Container>
      <Wrapper>
        <LoadingIcon src={icSignupLoading} alt="회원가입 로딩 중" />
        <LoadingText>회원가입을 진행중이에요!</LoadingText>
      </Wrapper>
    </Container>
  );
};

export default SignupLoading;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
`;

const Wrapper = styled.div`
  text-align: center;
`;

const LoadingIcon = styled.img`
  width: 87.11px;
  height: 87.11px;
`;

const LoadingText = styled.p`
  margin-top: 20px;
  ${({ theme }) => theme.fonts.subHeader3};
  color: #FFB500;
`;
