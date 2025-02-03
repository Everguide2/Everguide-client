import React from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { icModalError } from "@/assets"; 
import { setEmail, setPassword } from "../../stores/auth/authSlice"; 

const LoginErrorModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleRetry = () => {
    dispatch(setEmail(""));
    dispatch(setPassword("")); 
    onClose(); 
  };

  return (
    <Modal
      title="로그인 오류"
      description="이메일 혹은 비밀번호를 다시 확인해주세요!"
      buttonText="다시 입력하기"
      icon={icModalError} 
      onClose={onClose}
      onAction={handleRetry} 
    />
  );
};

export default LoginErrorModal;
