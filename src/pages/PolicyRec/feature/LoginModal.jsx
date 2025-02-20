import { ModalContainer, ModalContent, ModalButton, ModalButtonContainer, ModalText } from "./styleLoginModal";
import { useCustomNavigation } from "../../../hooks/useCustomNavigation"; // 커스텀 훅 경로 확인

const LoginModal = ({ onClose }) => {
  const { navigateTo } = useCustomNavigation();

  return (
    <ModalContainer>
      <ModalContent>
        <ModalText>정책추천을 받기 위해서는 로그인을 해야해요!</ModalText>
        <ModalButtonContainer>
          <ModalButton className="cancel" onClick={() => navigateTo("/")}>취소</ModalButton>
          <ModalButton className="login" onClick={() => navigateTo("/login")}>로그인하기</ModalButton>
        </ModalButtonContainer>
      </ModalContent>
    </ModalContainer>
  );
};

export default LoginModal;
