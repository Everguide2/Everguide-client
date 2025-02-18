import React from "react";
import styled from "styled-components";

const Message = ({ text, messageType }) => {
  return <StyledMessage messageType={messageType}>{text}</StyledMessage>;
};

export default Message;

const StyledMessage = styled.p`
  ${({ theme }) => theme.fonts.body3};
  color: ${({ messageType }) =>
    messageType === "success"
      ? "#007AFF" // ? 비밀번호가 일치하면 파란색
      : messageType === "error"
      ? "#FF4A4A" 
      : messageType === "sent"
      ? "#FF4A4A" // ? 비밀번호가 불일치하면 빨간색
      : messageType === "focused"
      ? "black" // ? 포커스 시 검정색
      : "#E8E8E8"
    }; 
  text-align: left;
  margin-left: 20px;
  margin-top: -10px;
  transition: color 0.3s ease; 
`;
