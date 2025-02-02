import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // React Router의 useNavigate 추가
import InputField from "@components/InputField/InputField.jsx";
import Button from "../components/Button";
import Ad from "@/components/Ad/Ad.jsx";
import Logo from "../components/Logo";
import Links from "../components/Links";
import Message from "../components/Message";
import { string } from "../../../constants";
import NonExistingMemberModal from "@/components/Modal/NonExistingMemberModal";

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

  const [showNonExistingMemberModal, setShowNonExistingMemberModal] = useState(false);
  
  const fakeMember = {
    email: "seojin@gmail.com",
    name: "김서진",
    phone: "01050585318",
  };

  const navigate = useNavigate(); // 페이지 이동에 사용되는 navigate 함수 정의

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendCode = () => {
    if (formData.phone) {
      setIsCodeSent(true);
      setVerificationStatus({
        message: "인증번호가 발송되었어요 (유효시간: 5:00)",
        messageType: "sent",
      });
    }
  };

  const handleVerifyCode = () => {
    if (formData.verificationCode === "1234") {
      setVerificationCompleted(true);
      setVerificationStatus({
        message: "인증이 완료되었어요!",
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

      formData.name !== fakeMember.name ||
      formData.phone !== fakeMember.phone
    ) {
      setShowNonExistingMemberModal(true);
      return;
    }

    if (verificationCompleted) {
      navigate("/email-result", { state: {  name: formData.name, email: fakeMember.email  } });
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
          title={string.findEmail.title}
          description={string.findEmail.description}
        />
        <Form onSubmit={handleSubmit}>
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
              disabled={verificationCompleted}
            />
            <Button
              onClick={handleSendCode}
              disabled={!formData.phone || isCodeSent || verificationCompleted}
              width="160px"
              height="56px"
            >
              {isCodeSent ? "인증번호 재전송" : "인증번호 받기"}
            </Button>
          </PhoneInputWrapper>
          {isCodeSent && (
            <>
              <VerificationInputWrapper>
                <StyledInput
                  type="text"
                  name="verificationCode"
                  placeholder="인증번호 입력"
                  value={formData.verificationCode}
                  onChange={handleInputChange}
                  required
                  disabled={verificationCompleted}
                />
                <Button
                  onClick={handleVerifyCode}
                  disabled={!formData.verificationCode || verificationCompleted}
                  width="160px"
                  height="56px"
                >
                  인증번호 확인
                </Button>
              </VerificationInputWrapper>
              <Message
                text={verificationStatus.message}
                messageType={verificationStatus.messageType}
              />
            </>
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
    
    {showNonExistingMemberModal && (
        <NonExistingMemberModal
          onClose={() => setShowNonExistingMemberModal(false)}
        />
      )}
    </>
  );
};

export default FindPassword;

// 스타일 컴포넌트 그대로 유지

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 150px;
  widht: 1440px;
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

const VerificationInputWrapper = styled.div`
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