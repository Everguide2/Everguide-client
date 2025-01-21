import React from "react";
import styled from "styled-components";
import InputField from "../../../components/InputField";
import Button from "../ui/Button";
import Message from "../ui/Message";

const VerificationInput = ({
  verificationSent,
  verificationCode,
  verificationCompleted, 
  verificationButtonText,
  verificationStatus,
  onVerificationSend,
  onVerificationCheck,
  onInputChange,
}) => {
  return (
    <>
      <InputWrapper>
        <InputField
          type="text"
          name="verificationCode"
          placeholder="인증번호 입력"
          value={verificationCode}
          onChange={onInputChange}
          required
          disabled={verificationCompleted} // 인증 완료 시 입력 비활성화
        />
        <Button
          onClick={onVerificationCheck}
          width="160px"
          disabled={!verificationCode || verificationCompleted} // 인증 완료 시 버튼 비활성화
        >
          인증번호 확인
        </Button>
      </InputWrapper>
      {verificationSent && (
        <Message
          text={verificationStatus.message}
          messageType={verificationStatus.messageType}
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
