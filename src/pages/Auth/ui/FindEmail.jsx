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
import NonExistingMemberModal from "@/components/Modal/NonExistingMemberModal";

const FindEmail = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    verificationCode: "",
  });

  const [verificationSent, setVerificationSent] = useState(false);
  const [verificationCompleted, setVerificationCompleted] = useState(false);
  const [correctVerificationCode] = useState("1234"); 
  const [showNonExistingMemberModal, setShowNonExistingMemberModal] = useState(false);

  const fakeMember = {
    name: "김서진",
    phone: "01050585318",
    email: "seojin@gmail.com",
  };

  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendCode = () => {
    if (formData.phone) {
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

    if (formData.name !== fakeMember.name || formData.phone !== fakeMember.phone) {
      setShowNonExistingMemberModal(true);
      return;
    }

    if (verificationCompleted) {
      navigate("/email-result", { state: { name: formData.name, email: fakeMember.email } });
    } 
  };

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.phone.trim() !== "" &&
    verificationSent &&
    verificationCompleted;

  return (
    <>
      <Container>
        <Ad />
        <Content>
          <Logo title={string.findEmail.title} description={string.findEmail.description} />
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
                disabled={!formData.phone || verificationSent}
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
              disabled={!isFormValid}
              width="494px"
              height="56px"
            >
              찾아보기
            </Button>
          </Form>
          <Links links={string.findEmail.links} />
        </Content>
      </Container>

      {showNonExistingMemberModal && (
        <NonExistingMemberModal onClose={() => setShowNonExistingMemberModal(false)} />
      )}
    </>
  );
};

export default FindEmail;

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
