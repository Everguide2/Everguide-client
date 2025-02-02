import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import { icEmailResult } from "@/assets";

const PasswordSent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || { email: "" };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <Container>
      <Content>
        <IconWrapper>
          <Icon />
        </IconWrapper>
        <Message>
          <strong>{email}</strong>로 <br />
          회원님의 임시 비밀번호를 전송하였습니다!
        </Message>
        <SubText>
          계정에 로그인하고 나에게 딱맞는 복지혜택과 정책을 찾아가요
        </SubText>
        <ButtonGroup>
          <Button onClick={handleLoginClick} width="494px" height="56px">
            로그인 하러가기
          </Button>
        </ButtonGroup>
      </Content>
    </Container>
  );
};

export default PasswordSent;

// 스타일 컴포넌트
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  widht: 1440px;
`;

const Content = styled.div`
  text-align: center;
  background-color: white;
  border-radius: 12px;
  padding: 50px 40px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Icon = styled.div`
  width: 87.11px;
  height: 87.11px;
  background: url("${icEmailResult}") no-repeat center;
  background-size: contain;
`;

const Message = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  ${({ theme }) => theme.fonts.header3};
`;

const SubText = styled.p`
  font-size: 14px;
  color: #BBBBBB;
  margin-bottom: 30px;
  ${({ theme }) => theme.fonts.header6};
`;

const ButtonGroup = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;
