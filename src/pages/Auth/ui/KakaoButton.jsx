import React from "react";
import LoginButton from "./LoginButton";
import { icLoginKakao } from "../../../assets";

const KakaoButton = () => {
  const handleKakaoLogin = () => {
    window.location.href =
      "https://kauth.kakao.com/oauth/authorize?client_id=YOUR_KAKAO_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code";
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
