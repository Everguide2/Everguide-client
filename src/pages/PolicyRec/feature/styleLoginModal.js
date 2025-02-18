import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const ModalContent = styled.div`
${({theme}) => theme.fonts.header4}
color: ${({ theme }) => theme.colors.gray[900]};
  background: white;
  padding: 24px;
  border-radius: 12px;
  width: 785px;
  height: 359px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  justify-content : center;
  display : flex;
  flex-direction : column;
  align-items:center;
`;

export const ModalButton = styled.button`
  width: 292px;
  height: 81px;
  margin: 20px 10px; /* 버튼 간 간격 조정 */
  border: none;
  border-radius: 20px; 
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease; /* 부드러운 효과 */

  &.cancel {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    color: ${({ theme }) => theme.colors.gray[300]};
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray[400]};
      transform: scale(1.05);
    }
  }

  &.login {
    background-color: ${({ theme }) => theme.colors.primary[500]};
    color: white;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary[600]};
      transform: scale(1.05);
    }
  }
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 100%;
  margin-top: auto; /* ✅ 버튼을 아래쪽으로 정렬 */
  padding-bottom: 20px; /* 버튼과 모달 하단 사이 여백 */
`;

export const ModalText = styled.p`
  flex-grow: 1; /* ✅ 텍스트를 화면 중앙으로 밀어 올리기 */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
`;
