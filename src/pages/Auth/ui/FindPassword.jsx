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
import NonExistingMemberModal from "../../../components/Modal/NonExistingMemberModal"; // 비회원 모달 추가

const FindPassword = () => {
  const navigate = useNavigate();

  // 가상의 회원 정보
  const fakeMember = {
    email: "seojin@gmail.com",
    name: "김서진",
    phone: "01050585318",
  };

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
  const [showNonExistingMemberModal, setShowNonExistingMemberModal] = useState(false); // 비회원 모달 상태 추가

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

    // 가상의 회원 정보와 비교하여 존재하지 않으면 비회원 모달 표시
    if (
      formData.email !== fakeMember.email ||
      formData.name !== fakeMember.name ||
      formData.phone !== fakeMember.phone
    ) {
      setShowNonExistingMemberModal(true);
      return;
    }

    if (verificationCompleted) {
      navigate("/password-sent", { state: { email: formData.email } });
    } else {
      alert("인증을 완료해주세요!");
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

      {/* 존재하지 않는 회원 모달 */}
      {showNonExistingMemberModal && (
        <NonExistingMemberModal onClose={() => setShowNonExistingMemberModal(false)} />
      )}
    </>
  );
};

export default FindPassword;

// 스타일 컴포넌트
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
