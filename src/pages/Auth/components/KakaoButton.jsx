import React from "react";
import LoginButton from "./LoginButton";
import { icLoginKakao } from "../../../assets";

const KakaoButton = () => {
  const handleKakaoLogin = () => {
    window.location.href =
        `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_KAKAO_REST_API}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URL}&response_type=code`;
  };

  return (
    <LoginButton
      bgColor="#FFD600"
      textColor="black"
      icon={icLoginKakao}
      altText="Kakao Icon"
      label="카카오로 시작하기"
      onClick={handleKakaoLogin}
    />
  );
};

export default KakaoButton;