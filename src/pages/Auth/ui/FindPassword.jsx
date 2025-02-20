import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import InputField from "@components/InputField/InputField.jsx";
import Button from "../components/Button";
import Ad from "@/components/Ad/Ad.jsx";
import Logo from "../components/Logo";
import Links from "../components/Links";
import VerificationInput from "../components/VerificationInput";
import { string } from "../../../constants";
import NonExistingMemberModal from "../../../components/Modal/NonExistingMemberModal";
import AuthDummy from "@test/AuthDummy"; // ✅ 더미 데이터 가져오기

const FindPassword = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phoneNumber: "",
    verificationCode: "",
  });

  const [verificationSent, setVerificationSent] = useState(false);
  const [verificationCompleted, setVerificationCompleted] = useState(false);
  const [correctVerificationCode] = useState("1234");
  const [showNonExistingMemberModal, setShowNonExistingMemberModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendCode = () => {
    if (formData.phoneNumber) {
      setVerificationSent(true);
    }
  };

  const handleVerifyCode = () => {
    if (formData.verificationCode === correctVerificationCode) {
      setVerificationCompleted(true);
    } else {
      setVerificationCompleted(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ 입력한 정보가 `AuthDummy`와 일치하는지 확인
    if (
      formData.email !== AuthDummy.email ||
      formData.name !== AuthDummy.name ||
      formData.phoneNumber !== AuthDummy.phoneNumber
    ) {
      setShowNonExistingMemberModal(true);
      return;
    }

    if (verificationCompleted) {
      navigate("/password-sent", { state: { email: formData.email } });
    }
  };

  return (
    <>
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
                name="phoneNumber"
                placeholder="휴대폰 번호 입력 (- 제외)"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
              <Button
                onClick={handleSendCode}
                disabled={!formData.phoneNumber || verificationSent}
                width="160px"
                height="56px"
              >
                {verificationSent ? "인증번호 재전송" : "인증번호 받기"}
              </Button>
            </PhoneInputWrapper>

            {verificationSent && (
              <VerificationInput
                verificationSent={verificationSent}
                verificationCode={formData.verificationCode}
                verificationCompleted={verificationCompleted}
                correctVerificationCode={correctVerificationCode}
                onVerificationCheck={handleVerifyCode}
                onInputChange={handleInputChange}
              />
            )}

            <Button
              type="submit"
              disabled={!verificationSent || !verificationCompleted}
              width="494px"
              height="56px"
            >
              찾아보기
            </Button>
          </Form>
          <Links links={string.findPassword.links} />
        </Content>
      </Container>

      {showNonExistingMemberModal && (
        <NonExistingMemberModal onClose={() => setShowNonExistingMemberModal(false)} />
      )}
    </>
  );
};

export default FindPassword;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 150px;
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
