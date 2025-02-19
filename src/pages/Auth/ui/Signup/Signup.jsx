import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "@components/InputField/InputField.jsx";
import Button from "../../components/Button";
import Ad from "@/components/Ad/Ad.jsx";
import Logo from "../../components/Logo";
import { string } from "../../../../constants";
import DateOfBirthInput from "../../components/DateOfBirthInput";
import VerificationInput from "../../components/VerificationInput";
import PasswordInput from "../../components/PasswordInput";
import EmailInput from "../../components/EmailInput";
import SignupLoading from "../SignupLoading"; 
import FixedFooter from "../../components/FixedFooter";
import { Container, Content, ScrollArea, Form, InputWrapper, Label } from "./SignupStyles";

const Signup = () => {
  const navigate = useNavigate();

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
  const [correctVerificationCode] = useState("1234");
  const [isLoading, setIsLoading] = useState(false); 
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { name, birthYear, birthMonth, birthDay, phone, email, password, confirmPassword } = formData;

    const isValid =
      name.trim() &&
      birthYear.trim() &&
      birthMonth.trim() &&
      birthDay.trim() &&
      phone.trim() &&
      email.trim() &&
      password.trim() &&
      confirmPassword.trim() &&
      password === confirmPassword; 

    setIsFormValid(isValid);
  }, [formData, verificationCompleted]);

  // 입력값 변경 핸들러
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 인증번호 요청
  const handleVerification = () => {
    if (formData.phone) {
      setVerificationSent(true);
    }
  };

  // 인증번호 확인
  const handleVerifyCode = () => {
    if (formData.verificationCode === correctVerificationCode) {
      setVerificationCompleted(true);
    } else {
      setVerificationCompleted(false);
    }
  };

  // 이메일 중복 확인
  const handleEmailCheck = () => {
    alert("이메일 중복 확인 완료!");
  };

  // 회원가입 제출
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!verificationCompleted) {
      alert("인증을 완료해주세요!");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/signup-success");
    }, 3000);
  };

  if (isLoading) {
    return <SignupLoading />;
  }

  return (
    <Container>
      <Ad />
      <Content>
        <ScrollArea>
          <Logo title={string.signup.title} description={string.signup.description} width="142px" height="24px"/>
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
                disabled={!formData.phone || verificationSent}
                width="160px"
                height="56px"
              >
                {verificationSent ? "인증번호 재전송" : "인증번호 받기"}
              </Button>
            </InputWrapper>

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

            <EmailInput email={formData.email} onInputChange={handleInputChange} onEmailCheck={handleEmailCheck} />

            <PasswordInput
              password={formData.password}
              confirmPassword={formData.confirmPassword}
              onInputChange={handleInputChange}
            />
          </Form>
        </ScrollArea>
        <FixedFooter links={string.signup.links} onSubmit={handleSubmit} isEnabled={isFormValid && verificationCompleted} />
      </Content>
    </Container>
  );
};

export default Signup;
