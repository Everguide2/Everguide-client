import {ModalContainer,ModalContent,ModalButton,ModalButtonContainer,ModalText} from "./styleLoginModal"

const LoginModal = ({ onClose }) => {
    return (
      <ModalContainer>
        <ModalContent>
          <ModalText>정책추천을 받기 위해서는 로그인을 해야해요!</ModalText>
          <ModalButtonContainer>
            <ModalButton className="cancel" onClick={onClose}>취소</ModalButton>
            <ModalButton className="login" onClick={() => console.log("로그인 페이지 이동")}>로그인하기</ModalButton>
          </ModalButtonContainer>
        </ModalContent>
      </ModalContainer>
    );
  };
  
  
  export default LoginModal;    