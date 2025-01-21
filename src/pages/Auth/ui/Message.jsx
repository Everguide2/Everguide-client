import React from "react";
import styled from "styled-components";

const Message = ({ text, messageType }) => {
  return <StyledMessage messageType={messageType}>{text}</StyledMessage>;
};

export default Message;

const StyledMessage = styled.p`
  ${({ theme }) => theme.fonts.body3};
  color: ${({ messageType }) =>
    messageType === "sent"
      ? "#FF4A4A"
      : messageType === "success"
      ? "#3681FE"
      : "#FF4A4A"};
  text-align: left;
  margin-top: -10px;
  margin-left: 20px;
`;
