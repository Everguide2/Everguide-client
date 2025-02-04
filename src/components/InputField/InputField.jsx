import React from "react";
import styled from "styled-components";

const InputField = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  required,
  label,
  error,
  isFocused,
  isValid,
  isCompleted,
  context, // 추가: "login" 또는 "signup"을 전달받음
}) => {
  const isPassword = name === "password" || name === "confirmPassword";

  return (
    <InputWrapper>
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <StyledInput
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        error={error}
        isFocused={isFocused}
        isValid={isValid}
        isCompleted={isCompleted}
        isPassword={isPassword}
        context={context} // 로그인 or 회원가입 여부 전달
      />
    </InputWrapper>
  );
};

export default InputField;

// 스타일 정의
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 5px;
`;

const StyledLabel = styled.label`
  ${({ theme }) => theme.fonts.body3};
  color: #787878;
  text-align: left;
`;

const StyledInput = styled.input`
  ${({ theme }) => theme.fonts.body3};
  padding: 0 20px;
  height: 56px;
  flex-grow: 1;
  border: 2px solid
    ${({ isFocused, isPassword, error, isValid, isCompleted, context }) =>
      error
        ? "#FF4A4A" // 오류 시 빨간색
        : isCompleted
        ? "#E8E8E8" // 입력 완료 시 회색
        : isValid
        ? "black" // 모든 조건 충족 시 검정색
        : isFocused
        ? isPassword && context === "signup"
          ? "black" // 회원가입에서 비밀번호 필드일 경우 검정색
          : "#FFCC00" // 로그인에서는 노란색
        : "#E8E8E8"}; // 기본값 (회색)
  border-radius: 12px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ error, isCompleted, context, isPassword }) =>
      error
        ? "#FF4A4A"
        : isCompleted
        ? "#E8E8E8"
        : isPassword && context === "signup"
        ? "black" // 회원가입의 비밀번호 필드는 검정색 유지
        : "#FFCC00"}; // 나머지는 노란색
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;
