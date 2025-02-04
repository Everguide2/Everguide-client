import React, { useState } from "react";
import styled from "styled-components";
import InputField from "@components/InputField/InputField.jsx";
import Button from "../components/Button";
import Message from "../components/Message"; 

const EmailInput = ({ email, onInputChange }) => {
  const [emailError, setEmailError] = useState(false); 
  const [emailStatus, setEmailStatus] = useState({ message: "", type: "" });
  const [isEmailChecked, setIsEmailChecked] = useState(false); 

  // 이메일 형식 검증 함수
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // 입력값이 변경될 때 이메일 형식 검사
  const handleInputChange = (event) => {
    const { value } = event.target;
    onInputChange(event);

    // 이메일 형식이 올바르지 않으면 오류 메시지 표시
    const isValid = validateEmail(value);
    setEmailError(value && !isValid);

    // 입력이 바뀌면 이메일 중복 확인 상태 초기화
    setEmailStatus({ message: "", type: "" });
    setIsEmailChecked(false);
  };

  // 이메일 중복 확인 함수
  const handleEmailCheck = () => {
    if (emailError || !email) return;

    // 서버에서 중복 확인하는 API 호출 (여기서는 더미 데이터 사용)
    const usedEmails = ["test@email.com", "example@email.com"]; 

    if (usedEmails.includes(email)) {
      setEmailStatus({ message: "이미 사용 중인 이메일입니다.", type: "error" });
      setIsEmailChecked(false);
    } else {
      setEmailStatus({ message: "사용 가능한 이메일이에요!", type: "success" });
      setIsEmailChecked(true);
    }
  };

  return (
    <>
      <Label>이메일 주소</Label>
      <InputWrapper>
        <InputField
          type="email"
          name="email"
          placeholder="abcd@email.com"
          value={email}
          onChange={handleInputChange}
          required
          error={emailError} 
        />
        <Button onClick={handleEmailCheck} width="160px" disabled={!email || isEmailChecked}>
          중복 확인하기
        </Button>
      </InputWrapper>

      {/* 이메일 형식이 올바르지 않으면 메시지 표시 */}
      {emailError && <Message text="이메일 형식을 다시 확인해주세요" messageType="error" />}

      {/* 이메일 중복 확인 결과 메시지 표시 */}
      {emailStatus.message && <Message text={emailStatus.message} messageType={emailStatus.type} />}
    </>
  );
};

export default EmailInput;

// 스타일 정의
const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
`;

const Label = styled.div`
  ${({ theme }) => theme.fonts.body3};
  color: #787878;
  text-align: left;
  margin-top: 10px;
`;
