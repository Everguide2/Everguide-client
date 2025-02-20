import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { icMyPagePassword, icModalClose } from "@/assets";
import { updatePassword } from "@/apis/mypage-controller";

const ChangePasswordModal = ({ isOpen, onClose }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isConfirmStarted, setIsConfirmStarted] = useState(false);

  const isLengthValid = newPassword.length >= 8;
  const hasLetter = /[A-Za-z]/.test(newPassword);
  const hasNumber = /[0-9]/.test(newPassword);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(newPassword);
  const isMatch = confirmPassword !== "" && newPassword === confirmPassword;

  useEffect(() => {
    setIsValid(isLengthValid && hasLetter && hasNumber && hasSpecialChar && isMatch);
  }, [newPassword, confirmPassword]);

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (!isConfirmStarted) {
      setIsConfirmStarted(true);
    }
  };

  const handleChangePassword = async () => {
    if (!isValid) return;

    try {
      const response = await updatePassword({
        originalPwd: currentPassword, // 기존 비밀번호
        newPwd: newPassword, // 새 비밀번호
        rewriteNewPwd: confirmPassword, // 새 비밀번호 재입력
      });
      if(response.isSuccess){
        alert("비밀번호가 변경되었습니다.");
        onClose();
      } else {
        alert(`비밀번호 변경 실패: ${response.message}`);
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "비밀번호 변경에 실패했습니다.");
    }
  };

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <img src={icModalClose} alt="닫기" />
        </CloseButton>
        <PasswordIcon src={icMyPagePassword} alt="비밀번호 변경 아이콘" />
        <Title>비밀번호 변경</Title>

        <InputContainer>
          <Label>기존 비밀번호</Label>
          <Input
            type="password"
            placeholder="기존 비밀번호를 입력해주세요"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <Label>비밀번호</Label>
          <Input
            type="password"
            placeholder="새 비밀번호를 입력해주세요"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <HelperTextContainer>
            <HelperText isValid={isLengthValid}>* 8자 이상 입력</HelperText>
            <HelperText isValid={hasLetter}>* 영어 포함</HelperText>
            <HelperText isValid={hasNumber}>* 숫자 포함</HelperText>
            <HelperText isValid={hasSpecialChar}>* 특수문자 포함</HelperText>
          </HelperTextContainer>
        </InputContainer>

        <InputContainer>
          <Label>비밀번호 재입력</Label>
          <Input
            type="password"
            placeholder="새 비밀번호를 다시 입력해주세요"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <HelperTextContainer>
            {isConfirmStarted !=="비밀번호 확인을 위해 다시 입력해주세요" && (
              <HelperText isValid={isMatch}>
                {isMatch ? "비밀번호가 일치합니다" : "비밀번호 확인을 위해 다시 입력해주세요"}
              </HelperText>
            )}
          </HelperTextContainer>
        </InputContainer>

        <SubmitButton onClick={handleChangePassword} disabled={!isValid} isValid={isValid}>
          변경하기
        </SubmitButton>
      </ModalContainer>
    </Overlay>
  );
};

export default ChangePasswordModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; 
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999; 
`;

const ModalContainer = styled.div`
  background: white;
  width: 625px;
  padding: 24px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 28px;
    height: 28px;
  }
`;

const PasswordIcon = styled.img`
  width: 56px;
  height: 56px;
  margin-top: 50px;
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.header5};
  color: ${({ theme }) => theme.colors.primary[900]};
  margin-top: 10px;
`;

const InputContainer = styled.div`
  text-align: left;
  margin-top: 20px;
`;

const Label = styled.label`
  ${({ theme }) => theme.fonts.subHeader5};
  color: ${({ theme }) => theme.colors.gray[700]};
`;

const Input = styled.input`
  width: 600px;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 4px;
  ${({ theme }) => theme.fonts.subHeader5};
`;

const HelperTextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 8px;
  margin-left: 16px;
`;

const HelperText = styled.p`
  color: ${({ isValid }) => (isValid ? "#007bff" : "#9e9e9e")};
  ${({ theme }) => theme.fonts.body4};
  transition: color 0.3s ease;
`;

const SubmitButton = styled.button`
  display: block;
  width: 354px;
  padding: 15px;
  margin-top: 30px;
  border-radius: 28px;
  border: none;
  background-color: ${({ isValid, theme }) => (isValid ? theme.colors.primary[500] : theme.colors.gray[200])};
  box-shadow: ${({ isValid }) => (isValid ? "0px 4px 15px rgba(251, 227, 0, 0.5)" : "none")};
  color: ${({ isValid, theme }) => (isValid ? "white" : theme.colors.gray[300])};
  ${({ theme }) => theme.fonts.header5};
  cursor: ${({ isValid }) => (isValid ? "pointer" : "default")};
  transition: 0.3s;
`;
