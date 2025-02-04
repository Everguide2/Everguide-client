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
      ? "#007AFF" // ? ��й�ȣ�� ��ġ�ϸ� �Ķ���
      : messageType === "error"
      ? "#FF4A4A" 
      : messageType === "sent"
      ? "#FF4A4A" // ? ��й�ȣ�� ����ġ�ϸ� ������
      : messageType === "focused"
      ? "black" // ? ��Ŀ�� �� ������
      : "#E8E8E8"
    }; 
  text-align: left;
  margin-left: 20px;
  margin-top: -10px;
  transition: color 0.3s ease; 
`;
