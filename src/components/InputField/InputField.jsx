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
  context, // �߰�: "login" �Ǵ� "signup"�� ���޹���
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
        context={context} // �α��� or ȸ������ ���� ����
      />
    </InputWrapper>
  );
};

export default InputField;

// ��Ÿ�� ����
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
        ? "#FF4A4A" // ���� �� ������
        : isCompleted
        ? "#E8E8E8" // �Է� �Ϸ� �� ȸ��
        : isValid
        ? "black" // ��� ���� ���� �� ������
        : isFocused
        ? isPassword && context === "signup"
          ? "black" // ȸ�����Կ��� ��й�ȣ �ʵ��� ��� ������
          : "#FFCC00" // �α��ο����� �����
        : "#E8E8E8"}; // �⺻�� (ȸ��)
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
        ? "black" // ȸ�������� ��й�ȣ �ʵ�� ������ ����
        : "#FFCC00"}; // �������� �����
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;
