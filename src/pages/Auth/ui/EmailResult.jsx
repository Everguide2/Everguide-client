import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { string } from "../../../constants";
import Button from "../components/Button"; 
import { icEmailResult } from "@/assets";

const EmailResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, email } = location.state || { name: "", email: "" };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleFindPasswordClick = () => {
    navigate("/find-password");
  };

  return (
    <Container>
      <Content>
        <IconWrapper>
          <Icon />
        </IconWrapper>
        <Message>
          <strong>
            {name}님의 이메일은 {email}입니다!
          </strong>
        </Message>
        <SubText>{string.login.description}</SubText>
        <ButtonGroup>
          <Button onClick={handleLoginClick} >
            로그인 하러가기
          </Button>
          <StyledSecondaryButton onClick={handleFindPasswordClick}>
            비밀번호 찾기
          </StyledSecondaryButton>
        </ButtonGroup>
      </Content>
    </Container>
  );
};

export default EmailResult;

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

const StyledSecondaryButton = styled.button`
  width: 494px;
  height: 56px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  background-color: #ffffff; 
  color: #333333; 
  border: 1.5px solid #E8E8E8; 
  cursor: pointer;

  &:hover {
    background-color: #f3f4f6; 
  }
  ${({ theme }) => theme.fonts.subHeader5};
`;
