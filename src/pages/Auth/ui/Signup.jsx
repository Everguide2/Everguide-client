import React, { useState } from "react";
import styled from "styled-components";
import InputField from "@components/InputField/InputField.jsx";
import Button from "../components/Button";
import Ad from "@/components/Ad/Ad.jsx";
import Logo from "../components/Logo";
import Links from "../components/Links";
import { string } from "../../../constants";
import DateOfBirthInput from "../components/DateOfBirthInput";
import VerificationInput from "../components/VerificationInput";
import Message from "../components/Message";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    gender: "",
    phone: "",
    verificationCode: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [verificationSent, setVerificationSent] = useState(false);
  const [verificationCompleted, setVerificationCompleted] = useState(false); 
  const [verificationStatus, setVerificationStatus] = useState({
    message: "",
    messageType: null,
  });
  const [verificationButtonText, setVerificationButtonText] =
    useState("인증번호 받기");
  const [passwordValid, setPasswordValid] = useState(true); 
  const [passwordMatch, setPasswordMatch] = useState(true); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      const isValid = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(value);
      setPasswordValid(isValid);
    }

    if (name === "confirmPassword") {
      setPasswordMatch(value === formData.password);
    }
  };


  const handleEmailCheck = () => {
    alert("이메일 중복 확인 완료!");
  };

  const handleVerification = () => {
    setVerificationSent(true);
    setVerificationStatus({
      message: "인증번호가 발송되었어요 (유효시간 5:00)",
      messageType: "sent",
    });
    setVerificationButtonText("인증번호 재전송");
  };

  const handleVerifyCode = () => {
    if (formData.verificationCode === "1234") {
      alert("인증번호가 확인되었습니다!");
      setVerificationStatus({
        message: "인증이 완료되었어요!",
        messageType: "success",
      });
      setVerificationCompleted(true);
    } else {
      alert("인증번호가 올바르지 않습니다.");
      setVerificationStatus({
        message: "인증번호가 잘못되었어요.",
        messageType: "error",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    console.log("회원가입 데이터:", formData);
    alert("회원가입이 완료되었습니다!");
  };

  return (
    <Container>
      <Ad />
      <Content>
        <ScrollArea>
          <Logo
            title={string.signup.title}
            description={string.signup.description}
            width="124px"
            height="24px;"
          />
          <Form onSubmit={handleSubmit}>
            <Label>이름</Label>
            <InputField
              type="text"
              name="name"
              placeholder="홍길동"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <Label>생년월일</Label>
            <DateOfBirthInput
              birthYear={formData.birthYear}
              birthMonth={formData.birthMonth}
              birthDay={formData.birthDay}
              onChange={handleInputChange}
            />
            <Label>전화번호</Label>
            <InputWrapper>
              <InputField
                type="tel"
                name="phone"
                placeholder="휴대폰 번호 입력 (- 제외)"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <Button
                onClick={handleVerification}
                width="160px"
                disabled={!formData.phone || verificationCompleted}
              >
                {verificationButtonText}
              </Button>
            </InputWrapper>
            {verificationSent && (
              <VerificationInput
                verificationSent={verificationSent}
                verificationCode={formData.verificationCode}
                verificationCompleted={verificationCompleted}
                verificationButtonText="인증번호 확인"
                verificationStatus={verificationStatus}
                onVerificationSend={handleVerification}
                onVerificationCheck={handleVerifyCode}
                onInputChange={handleInputChange}
              />
            )}
            <Label>이메일 주소</Label>
            <InputWrapper>
              <InputField
                type="email"
                name="email"
                placeholder="abcd@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <Button
                onClick={handleEmailCheck}
                width="160px"
                disabled={!formData.email}
              >
                중복 확인하기
              </Button>
            </InputWrapper>
            <Label>비밀번호</Label>
            <PasswordInputWrapper>
              <InputField
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <Message
                text="*8자 이상 입력 *영어 사용 *숫자 사용 *특수문자 사용"
                messageType={passwordValid ? "default" : "error"}
              />
            </PasswordInputWrapper>
            <Label>비밀번호 재입력</Label>
            <PasswordInputWrapper>
              <InputField
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
              <Message
                text={
                  passwordMatch
                    ? "비밀번호 확인을 위해 다시 한 번 입력해주세요"
                    : "비밀번호가 일치하지 않아요 다시 입력해주세요"
                }
                messageType={passwordMatch ? "default" : "error"}
              />
            </PasswordInputWrapper>
          </Form>
        </ScrollArea>
        <FixedFooter>
          <Button type="submit" width="494px" height="56px">
            가입하기
          </Button>
          <Links links={string.signup.links} />
        </FixedFooter>
      </Content>
    </Container>
  );
};

export default Signup;

// Styled-components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  gap: 150px;
`;

const Content = styled.div`
  margin-top: 100px;
  padding: 10px;
  border-radius: 20px;
  width: 494px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: visible;
`;

const ScrollArea = styled.div`
  height: 722px;
  overflow-y: auto;
  width: 100%;
  margin-top: 20px;
  padding: 0 45px;

  /* 스크롤바 너비 설정 */
  &::-webkit-scrollbar {
    width: 8px;
  }

  /* 스크롤바 핸들 크기 및 디자인 설정 */
  &::-webkit-scrollbar-thumb {
    background-color: #F3F3F3;
    border-radius: 4px;
    height: 200px; /* 스크롤바 핸들의 최소 높이 설정 */
  }

  /* 스크롤바 트랙(배경) 설정 */
  &::-webkit-scrollbar-track {
    background-color: white;
  }
`;


const FixedFooter = styled.div`
  margin-top: auto;
  padding-top: 30px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding-bottom: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
`;

const PasswordInputWrapper = styled.div`
  position: relative;
`;

const Label = styled.div`
  ${({ theme }) => theme.fonts.body3};
  color: #787878;
  text-align: left;
  margin-top: 10px;
`;