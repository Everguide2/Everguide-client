import React from "react";
import styled from "styled-components";
import Button from "../../pages/Auth/components/Button";
import { icModalClose } from "@/assets"; 

const Modal = ({ title, description, buttonText, onAction, onClose, icon }) => {
  return (
    <Overlay>
      <Container>
        {/* 닫기 버튼 추가 */}
        <CloseButton onClick={onClose}>
          <img src={icModalClose} alt="닫기" />
        </CloseButton>

        {/* 아이콘 */}
        {icon && <Icon src={icon} alt="modal icon" />}
        <Title>{title}</Title>
        <Description>{description}</Description>

        {/* Button 컴포넌트 사용 */}
        <ButtonWrapper>
          <Button onClick={onAction} width="600px" height="58px">
            {buttonText}
          </Button>
        </ButtonWrapper>
      </Container>
    </Overlay>
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Container = styled.div`
  background: white;
  border-radius: 20px;
  width: 700px;
  height: 465px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 50px;
  left: 600px;
  background: none;
  border: none;
  cursor: pointer;
  width: 50px;
  height: 50px;
  
  img {
    width: 100%;
    height: 100%;
  }
`;

const Icon = styled.img`
  width: 120px;
  height: 102px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.header3};
  color: #FFB500;
  margin-bottom: 10px;
`;

const Description = styled.p`
  ${({ theme }) => theme.fonts.header5};
  color: #BBBBBB;
  margin-bottom: 40px;
  white-space: pre-line;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
`;
