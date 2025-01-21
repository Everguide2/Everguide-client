import React from "react";
import LoginButton from "./LoginButton";
import { icLoginNaver } from "../../../assets";
import theme from "../../../theme/theme";

const NaverButton = () => {
  const handleNaverLogin = () => {
    window.location.href =
      "https://nid.naver.com/oauth2.0/authorize?client_id=YOUR_NAVER_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code";
  };

  return (
    <LoginButton
      bgColor= "#03C75A"
      textColor={theme.colors.realWhite}
      icon={icLoginNaver}
      altText="Naver Icon"
      label="네이버로 시작하기"
      onClick={handleNaverLogin}
    />
  );
};

export default NaverButton;
