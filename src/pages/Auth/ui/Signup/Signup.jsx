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
import AuthDummy from "@test/AuthDummy"; // ✅ 더미 데이터 가져오기

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    phoneNumber: "",
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
  const [isEmailTaken, setIsEmailTaken] = useState(false); 

  useEffect(() => {
    const { name, birthYear, birthMonth, birthDay, phoneNumber, email, password, confirmPassword } = formData;

    const isValid =
      name.trim() &&
      birthYear.trim() &&
      birthMonth.trim() &&
      birthDay.trim() &&
      phoneNumber.trim() &&
      email.trim() &&
      password.trim() &&
      confirmPassword.trim() &&
      password === confirmPassword &&
      !isEmailTaken; 

    setIsFormValid(isValid);
  }, [formData, verificationCompleted, isEmailTaken]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleVerification = () => {
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

  const handleEmailCheck = () => {
    if (formData.email === AuthDummy.email) {
      setIsEmailTaken(true);
      alert("이미 가입된 이메일입니다!");
    } else {
      setIsEmailTaken(false);
      alert("사용 가능한 이메일입니다!");
    }
  };

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
                name="phoneNumber"
                placeholder="휴대폰 번호 입력 (- 제외)"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
              <Button
                onClick={handleVerification}
                disabled={!formData.phoneNumber || verificationSent}
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
