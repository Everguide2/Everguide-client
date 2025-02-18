import React from "react";
import { useTheme } from "styled-components";
import CommonModal from "./CommonModal";

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  const theme = useTheme();

  return (
    <CommonModal
      isOpen={isOpen}
      onClose={onClose}
      title="로그아웃 하시겠어요?"
      description="다시 돌아오길 기다릴게요"
      buttonText="로그아웃"
      buttonColor="white" 
      buttonBorder={`1px solid ${theme.colors.gray[600]}`} 
      buttonTextColor={theme.colors.gray[600]}
      onConfirm={onConfirm}
    />
  );
};

export default LogoutModal;
