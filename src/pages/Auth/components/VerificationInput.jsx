import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InputField from "@components/InputField/InputField.jsx";
import Button from "./Button";
import Message from "./Message";

const VerificationInput = ({
  verificationSent,
  verificationCode,
  verificationCompleted,
  onVerificationCheck,
  onInputChange,
  correctVerificationCode,
}) => {
  const [inputError, setInputError] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [inputMessageType, setInputMessageType] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); 
  const [timeLeft, setTimeLeft] = useState(300); // 5분(300초) 타이머
  const [showTime, setShowTime] = useState(true); // 타이머 표시 여부

  useEffect(() => {
    if (verificationSent) {
      setTimeLeft(300); 
      setShowTime(true); 
      setInputMessage("인증번호가 발송되었어요");
      setInputMessageType("sent");
      setShowSuccessMessage(false); 
    }
  }, [verificationSent]);

  useEffect(() => {
    if (verificationSent && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [verificationSent, timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  const handleVerifyCode = () => {
    if (verificationCode === correctVerificationCode) {
      setInputError(false);
      setInputMessage("");
      setInputMessageType("");
      setShowTime(false);
      setShowSuccessMessage(true);
      onVerificationCheck(true);
    } else {
      setInputError(true);
      setInputMessage("인증번호가 잘못되었어요");
      setInputMessageType("error");
      onVerificationCheck(false); 
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    onInputChange(event);

    if (verificationCompleted) return; 

    if (value && value !== correctVerificationCode) {
      setInputError(true);
      setInputMessage("인증번호가 잘못되었어요");
      setInputMessageType("error");
      setShowTime(false);
      setShowSuccessMessage(false);
    } else if (value === correctVerificationCode) {
      setInputError(false);
      setInputMessage("");
      setInputMessageType("");
      setShowTime(false);
    } else {
      setInputError(false);
      setInputMessage("인증번호가 발송되었어요");
      setInputMessageType("sent");
      setShowTime(true);
      setShowSuccessMessage(false);
    }
  };

  return (
    <>
      <InputWrapper>
        <InputField
          type="text"
          name="verificationCode"
          placeholder="인증번호 입력"
          value={verificationCode}
          onChange={handleInputChange}
          required
          error={inputError}
          isSuccess={verificationCompleted}
        />
        <Button
          onClick={handleVerifyCode}
          width="160px"
          disabled={verificationCompleted} 
          isSuccess={verificationCompleted}
        >
          인증번호 확인
        </Button>
      </InputWrapper>

      {showSuccessMessage && <Message text="인증이 완료되었어요!" messageType="success" />}

      {!showSuccessMessage && inputError && <Message text="인증번호가 잘못되었어요" messageType="error" />}

      {verificationSent && !inputError && !verificationCompleted && showTime && (
        <Message
          text={`인증번호가 발송되었어요 (유효시간: ${timeLeft > 0 ? formatTime(timeLeft) : "만료됨"})`}
          messageType={timeLeft > 0 ? inputMessageType : "error"}
        />
      )}
    </>
  );
};

export default VerificationInput;

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
`;
