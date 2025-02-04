import React from "react";
import { useNavigate } from "react-router-dom"; 
import Modal from "./Modal";
import { icModalNonmember } from "@/assets"; 

const NonMemberModal = ({ onClose }) => {
  const navigate = useNavigate(); 

  const handleSignupRedirect = () => {
    navigate("/signup");
  };

  return (
    <Modal
      title="아직 비회원이시네요!"
      description={
        "앗, 아직 회원이 아니시군요!\n회원가입으로 우리 함께해요."
      }
      buttonText="회원가입 하기"
      icon={icModalNonmember} 
      onClose={onClose} 
      onAction={handleSignupRedirect}
    />
  );
};

export default NonMemberModal;
