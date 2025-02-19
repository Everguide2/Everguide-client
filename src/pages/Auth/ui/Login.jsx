import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../../apis/login-endpoint";
import KakaoButton from "../components/KakaoButton.jsx";
import NaverButton from "../components/NaverButton.jsx";
import InputField from "@components/InputField/InputField.jsx";
import Ad from "@/components/Ad/Ad.jsx";
import Logo from "../components/Logo.jsx";
import { useDispatch, useSelector } from "react-redux";
import { string } from "../../../constants/index.js";
import Links from "../components/Links.jsx";
import Button from "../components/Button.jsx"; 
import Divider from "../components/Divider.jsx"; 
import { setEmail, setPassword } from "../../../stores/auth/authSlice.js";
import LoginErrorModal from "../../../components/Modal/LoginErrorModal";
import NonMemberModal from "../../../components/Modal/NonMemberModal"; 
import styled from "styled-components";

const Login = () => {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const emailDomains = ["naver.com", "gmail.com", "tukorea.ac.kr"];
  const [emailSuggestions, setEmailSuggestions] = useState([]);
  const [showErrorModal, setShowErrorModal] = useState(false); 
  const [showNonMemberModal, setShowNonMemberModal] = useState(false); 

  const loginMutation = useMutation({
    mutationFn: loginApi, 
    onSuccess: (data) => { 
      console.log("✅ 로그인 성공:", data); 
      navigate("/");
      if (data?.accessToken) {
        localStorage.setItem("token", data.accessToken); 
        navigate("/"); 
      } else {
        console.error("❌ 서버에서 받은 데이터에 토큰이 없습니다!");
      }
    },
    onError: (error) => {
      console.error("❌ 로그인 실패:", error);
      setShowErrorModal(true);
    },
  });

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
  
    console.log("로그인 시도:", email, password);
  
    if (!email || !password) {
      console.error("❌ 이메일과 비밀번호를 입력하세요!");
      return;
    }
  
    loginMutation.mutate({ email, password });
  };

  return (
    <>
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
                context="login"
              />
            </InputWrapper>
            <Button type="submit" width="494px" disabled={password.length < 5 || !email}>
              로그인
            </Button>
          </Form>
          <Links links={string.login.links} />
        </Content>
        <Ad />
      </Container>

      {showErrorModal && (
        <LoginErrorModal onClose={() => setShowErrorModal(false)} />
      )}
      
      {showNonMemberModal && (
        <NonMemberModal onClose={() => setShowNonMemberModal(false)} />
      )}
    </>
  );
};

export default Login;



const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  widht: 1440px;
  height: 100vh;
  gap: 150px;
`;

const Content = styled.div`
  height: auto;
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
