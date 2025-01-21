import React, { useState } from "react";
import styled from "styled-components";
import InputField from "../../../components/InputField";
import Button from "../ui/Button";
import Ad from "../../../components/Ad";
import Logo from "../ui/Logo";
import Links from "../ui/Links";
import VerificationInput from "../ui/VerificationInput";
import { string } from "../../../constants";

const FindPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    verificationCode: "",
  });
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [verificationCompleted, setVerificationCompleted] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState({
    message: "",
    messageType: null, 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendCode = () => {
    if (formData.phone) {
      setIsCodeSent(true);
      setVerificationStatus({
        message: "인증번호가 발송되었습니다. (유효시간: 5:00)",
        messageType: "sent",
      });
    }
  };

  const handleVerifyCode = () => {
    if (formData.verificationCode === "1234") {
      setVerificationCompleted(true);
      setVerificationStatus({
        message: "인증이 완료되었습니다.",
        messageType: "success",
      });
    } else {
      setVerificationStatus({
        message: "인증번호가 올바르지 않습니다.",
        messageType: "error",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("비밀번호 찾기 요청 데이터:", formData);
    alert("비밀번호 찾기 요청이 접수되었습니다.");
  };

  return (
    <Container>
      <Ad />
      <Content>
        <Logo
          title={string.findPassword.title}
          description={string.findPassword.description}
        />
        <Form onSubmit={handleSubmit}>
          <StyledInput
            label="이메일 주소"
            type="email"
            name="email"
            placeholder="가입한 이메일"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <StyledInput
            label="이름"
            type="text"
            name="name"
            placeholder="홍길동"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <Label>전화번호</Label>
          <PhoneInputWrapper>
            <StyledInput
              type="tel"
              name="phone"
              placeholder="휴대폰 번호 입력 (- 제외)"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <Button
              onClick={handleSendCode}
              disabled={!formData.phone || isCodeSent}
              width="160px"
              height="56px"
            >
              {isCodeSent ? "인증번호 재전송" : "인증번호 받기"}
            </Button>
          </PhoneInputWrapper>
          {isCodeSent && (
            <VerificationInput
              verificationSent={isCodeSent}
              verificationCode={formData.verificationCode}
              verificationCompleted={verificationCompleted} 
              verificationStatus={verificationStatus}
              onVerificationCheck={handleVerifyCode}
              onInputChange={handleInputChange}
            />
          )}
          <Button
            type="submit"
            disabled={!isCodeSent || verificationStatus.messageType !== "success"}
            width="494px"
            height="56px"
          >
            찾아보기
          </Button>
        </Form>
        <Links links={string.findPassword.links} />
      </Content>
    </Container>
  );
};

export default FindPassword;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Content = styled.div`
  padding: 40px;
  border-radius: 10px;
  text-align: center;
  background-color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PhoneInputWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 494px;
`;

const StyledInput = styled(InputField)`
  flex-grow: 1;
  height: 56px;
  border-radius: 12px;
  padding: 0 16px;
  border: 1px solid #ccc;
`;

const Label = styled.div`
  ${({ theme }) => theme.fonts.body3};
  color: #787878;
  text-align: left;
  margin-top: 10px;
`;
