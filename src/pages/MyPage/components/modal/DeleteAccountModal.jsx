import React from "react";
import { useTheme } from "styled-components";
import CommonModal from "./CommonModal";

const DeleteAccountModal = ({ isOpen, onClose, onConfirm }) => {
  const theme = useTheme(); 

  return (
    <CommonModal
      isOpen={isOpen}
      onClose={onClose}
      title="정말 탈퇴하시겠어요?"
      description="저장한 데이터는 다시 복구할 수 없어요"
      buttonText="탈퇴하기"
      buttonColor={theme.colors.secondary[600]} 
      onConfirm={onConfirm}
    />
  );
};

export default DeleteAccountModal;
