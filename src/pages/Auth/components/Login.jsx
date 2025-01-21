import React, { useState } from "react";
import styled from "styled-components";
import KakaoButton from "../ui/KakaoButton.jsx";
import NaverButton from "../ui/NaverButton.jsx";
import InputField from "../../../components/InputField.jsx";
import Ad from "../../../components/Ad.jsx";
import Logo from "../ui/Logo.jsx";
import { useDispatch, useSelector } from "react-redux";
import { string } from "../../../constants";
import Links from "../ui/Links.jsx";
import Button from "../ui/Button.jsx"; 
import Divider from "../ui/Divider.jsx"; 
import { setEmail, setPassword, incrementLoginAttempts, loginSuccess, resetLoginAttempts } from "../../../stores/auth/authSlice.js";
import { icLoginEmail } from "../../../assets";


const Login = () => {
  const dispatch = useDispatch();
  const { email, password, loginAttempts } = useSelector((state) => state.auth);
  const emailDomains = ["naver.com", "gmail.com", "tukorea.ac.kr"];
  const [emailSuggestions, setEmailSuggestions] = useState([]);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    dispatch(setEmail(value));

    if (value.length >= 3 && !value.includes("@")) {
      setEmailSuggestions(emailDomains.map((domain) => `${value}@${domain}`));
    } else {
      setEmailSuggestions([]);
    }
  };

  const handleEmailSuggestionClick = (suggestion) => {
    dispatch(setEmail(suggestion));
    setEmailSuggestions([]);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password !== "correctPassword") {
      dispatch(incrementLoginAttempts());
      if (loginAttempts + 1 >= 5) {
        alert("비밀번호를 5회 이상 틀렸습니다. 비밀번호를 재설정하세요.");
        window.location.href = "/find-password";
      } else {
        alert("비밀번호가 틀렸습니다.");
      }
    } else {
      alert("로그인 성공");
      dispatch(loginSuccess());
      dispatch(resetLoginAttempts());
    }
  };

  return (
    <Container>
      <Content>
        <Logo
          title={string.login.title} 
          description={string.login.description} 
        />
        <ButtonContainer>
          <NaverButton />
          <KakaoButton />
        </ButtonContainer>
        <Divider>OR</Divider>
        <Form onSubmit={handleLogin}>
          <InputWrapper>
            <InputField
              label="이메일 주소"
              type="email"
              name="email"
              placeholder="abcd@email.com"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailSuggestions.length > 0 && (
              <SuggestionList>
                {emailSuggestions.map((suggestion, index) => (
                  <SuggestionItem
                    key={index}
                    onClick={() => handleEmailSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </SuggestionItem>
                ))}
              </SuggestionList>
            )}
          </InputWrapper>
          <InputWrapper>
            <InputField
              label="비밀번호"
              type="password"
              name="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
              required
            />
          </InputWrapper>
          <Button type="submit" width="494px"disabled={password.length < 5 || !email}>
            로그인
          </Button>
        </Form>
        <Links links={string.login.links} />
      </Content>
      <Ad />
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const Content = styled.div`
  height: auto;
  padding: 40px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
  width: 494px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 494px;
`;

const SuggestionList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.realWhite};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 5px;
  margin-top: 5px;
  list-style: none;
  padding: 5px 0;
  z-index: 10;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const SuggestionItem = styled.li`
  padding: 8px 12px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[800]};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }
`;
