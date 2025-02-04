import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button"; // 버튼 컴포넌트
import icSignupSuccess from "@assets/icons/ic-signup-success.svg"; // 아이콘 가져오기

const SignupSuccess = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Icon src={icSignupSuccess} alt="회원가입 성공" />
      <Title>회원가입이 완료되었어요!</Title>
      <Description>로그인하고 나만의 영상 아카이빙을 시작해요</Description>
      <Button onClick={() => navigate("/")}>영상 읽으러 가기</Button>
    </Container>
  );
};

export default SignupSuccess;

// 스타일 정의
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
`;

const Icon = styled.img`
  width: 87.11px;
  height: 87.11px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.header4};
  color: #FFB500;
  margin-bottom: 8px;
`;

const Description = styled.p`
  ${({ theme }) => theme.fonts.body3};
  color: #BBBBBB;
  margin-bottom: 60px;
`;

