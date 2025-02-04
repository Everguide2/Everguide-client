import React, { useState } from "react";
import styled from "styled-components";
import InputField from "@components/InputField/InputField.jsx";

const PasswordInput = ({
  password = "",
  confirmPassword = "",
  onInputChange,
}) => {
  // 비밀번호 유효성 검사 (8자 이상, 영어, 숫자, 특수문자 포함)
  const hasMinLength = password.length >= 8;
  const hasLetter = /[A-Za-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const passwordValid = hasMinLength && hasLetter && hasNumber && hasSpecialChar;

  // 비밀번호가 일치하는지 여부
  const isMatch = password === confirmPassword && confirmPassword.length > 0;
  const hasConfirmPassword = confirmPassword.length > 0;

  return (
    <>
      <Label>비밀번호</Label>
      <PasswordInputWrapper>
        <InputField
          type="password"
          name="password"
          value={password}
          onChange={onInputChange}
          required
          context="signup" 
          isValid={passwordValid} // 비밀번호 조건 만족 여부 전달
          error={password.length > 0 && !passwordValid}
          isCompleted={passwordValid} // 모든 조건 충족 여부 전달
        />
        {/*  모든 조건 충족 시 메시지 숨김 */}
        {!passwordValid && (
          <HelperText hasValue={password.length > 0}>
            <StyledSpan isValid={hasMinLength} hasValue={password.length > 0}>*8자 이상 입력 </StyledSpan>
            <StyledSpan isValid={hasLetter} hasValue={password.length > 0}>*영어 사용 </StyledSpan>
            <StyledSpan isValid={hasNumber} hasValue={password.length > 0}>*숫자 사용 </StyledSpan>
            <StyledSpan isValid={hasSpecialChar} hasValue={password.length > 0}>*특수문자 사용</StyledSpan>
          </HelperText>
        )}
      </PasswordInputWrapper>

      <Label>비밀번호 재입력</Label>
      <PasswordInputWrapper>
        <InputField
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onInputChange}
          required
          context="signup" 
          isValid={isMatch} // 비밀번호 일치 여부 전달
          error={hasConfirmPassword && !isMatch}
          isCompleted={isMatch} // 비밀번호가 일치하면 입력창 회색 변경
        />
        {/* ✅ 일치하면 메시지를 파란색으로 표시 */}
        <HelperText hasValue={confirmPassword.length > 0} isMatch={isMatch}>
          {!confirmPassword
            ? "비밀번호 확인을 위해 다시 한 번 입력해주세요"
            : isMatch
            ? "비밀번호가 일치해요!" 
            : "비밀번호가 일치하지 않아요 다시 입력해주세요"}
        </HelperText>
      </PasswordInputWrapper>
    </>
  );
};

export default PasswordInput;

const PasswordInputWrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

const Label = styled.div`
  ${({ theme }) => theme.fonts.body3};
  color: #787878;
  text-align: left;
  margin-top: 10px;
`;

const HelperText = styled.div`
  ${({ theme }) => theme.fonts.body3};
  color: ${({ hasValue, isMatch }) =>
    isMatch
      ? "#007AFF"
      : hasValue
      ? "#FF4A4A" 
      : "#E8E8E8"};
  text-align: left;
  margin-left: 20px;
  margin-top: 4px;
  transition: color 0.3s ease;
`;

const StyledSpan = styled.span`
  color: ${({ isValid, hasValue }) =>
    hasValue
      ? isValid
        ? "black" 
        : "#FF4A4A" 
      : "#E8E8E8"};
`;
