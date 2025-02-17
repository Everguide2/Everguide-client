import React from "react";
import styled from "styled-components";
import { icModalClose, icMyPageModal } from "@/assets"; 

const CommonModal = ({ isOpen, onClose, title, description, buttonText, buttonColor, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        {/* 닫기 버튼 */}
        <CloseButton onClick={onClose}>
          <img src={icModalClose} alt="닫기" />
        </CloseButton>

        {/* 모달 아이콘 */}
        <ModalIcon>
          <img src={icMyPageModal} alt="모달 아이콘" />
        </ModalIcon>

        <Title>{title}</Title>
        <Description>{description}</Description>

        {/* 액션 버튼 */}
        <ActionButton 
          isLogout={buttonText === "로그아웃"} 
          style={{ backgroundColor: buttonColor }} 
          onClick={onConfirm}
        >
          {buttonText}
        </ActionButton>
      </ModalContainer>
    </Overlay>
  );
};

export default CommonModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding-top: 100px;
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

const ModalIcon = styled.div`
  margin-bottom: 12px;

  img {
    width: 90px;
    height: 94px;
  }
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.header4};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: 12px;
`;

const Description = styled.p`
  ${({ theme }) => theme.fonts.subHeader1};
  color: ${({ theme }) => theme.colors.gray[400]};
  margin-bottom: 48px;
  text-align: center;
`;

const ActionButton = styled.button`
  width: 220px;
  height: 58px;
  padding: 16px;
  border: ${({ isLogout, theme }) => (isLogout ? `1px solid ${theme.colors.gray[600]}` : "none")};
  background-color: ${({ isLogout, theme }) => (isLogout ? "white" : theme.colors.secondary[600])};
  color: ${({ isLogout, theme }) => (isLogout ? theme.colors.gray[600] : "white")};
  border-radius: 12px;
  ${({ theme }) => theme.fonts.subHeader1};
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.9;
  }
`;
