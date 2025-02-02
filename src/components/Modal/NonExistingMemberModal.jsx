import React from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate 추가
import { useDispatch } from "react-redux"; // Redux 상태 관리
import styled from "styled-components";
import { icModalNonexisting, icModalClose } from "@/assets"; // 아이콘 import
import { setEmail, setPassword } from "../../stores/auth/authSlice"; // 이메일 & 비밀번호 초기화

const NonExistingMemberModal = ({ onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 회원가입 페이지로 이동
  const handleSignupRedirect = () => {
    navigate("/signup");
  };

  // 로그인 페이지로 이동하면서 입력 필드 초기화
  const handleRetry = () => {
    dispatch(setEmail("")); // 이메일 초기화
    dispatch(setPassword("")); // 비밀번호 초기화
    localStorage.removeItem("email"); // 입력 필드 리셋을 위해 저장된 값 제거
    localStorage.removeItem("password");
    window.location.reload(); // 입력 필드도 리셋하기 위해 페이지 새로고침
  };

  return (
    <Overlay>
      <Container>
        <CloseButton onClick={onClose}>
          <img src={icModalClose} alt="닫기" />
        </CloseButton>
        <Icon src={icModalNonexisting} alt="존재하지 않는 회원 아이콘" />
        <Title>존재하지 않는 회원 정보</Title>
        <Description>
          이름 및 전화번호를 다시 확인해주세요! <br />
          아직 회원이 아니라면, 회원가입으로 우리 함께해요.
        </Description>
        <ButtonWrapper>
          <PrimaryButton onClick={handleSignupRedirect}>
            회원가입 하기
          </PrimaryButton>
          <SecondaryButton onClick={handleRetry}>다시 입력하기</SecondaryButton>
        </ButtonWrapper>
      </Container>
    </Overlay>
  );
};

export default NonExistingMemberModal;

// ✅ 스타일 컴포넌트
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
  padding: 40px 20px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 50px;
  right: 90px;
  background: none;
  border: none;
  cursor: pointer;
  width: 28px;
  height: 28px;
`;

const Icon = styled.img`
  width: 94px;
  height: 94px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.header3};
  color: #333;
  margin-bottom: 10px;
`;

const Description = styled.p`
  ${({ theme }) => theme.fonts.header6};
  color: #bbbbbb;
  white-space: pre-line;
  margin-bottom: 30px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const PrimaryButton = styled.button`
  background: #ffb500;
  border: none;
  color: white;
  width: 600px;
  height: 56px;
  border-radius: 12px;
  cursor: pointer;
  ${({ theme }) => theme.fonts.subHeader5};
`;

const SecondaryButton = styled.button`
  background: white;
  border: 1.5px solid ${({ theme }) => theme.colors.gray[200]};
  color: ${({ theme }) => theme.colors.gray[400]};
  width: 600px;
  height: 56px;
  border-radius: 12px;
  cursor: pointer;
  ${({ theme }) => theme.fonts.subHeader5};
`;
