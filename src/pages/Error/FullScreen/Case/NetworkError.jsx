import React from "react";
import styled from "styled-components";
import ErrorHeader from "../ErrorHeader";
import theme from "../../../../theme/theme";
import HourglassImg from "../../../../assets/images/img-hourglass.svg";
const NetworkError = () => {
  return (
    <Screen>
      <ErrorHeader />
      <MessageArea>
        <Message>
          <MessageImg src={HourglassImg} alt="모래시계 이미지" />
          <MessageText>네트워크 연결이 원활하지 않은 것 같아요</MessageText>
          <MessageText>네트워크를 확인해 주세요</MessageText>
        </Message>
      </MessageArea>
    </Screen>
  );
};

export default NetworkError;

const Screen = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MessageArea = styled.div`
  width: 1440px;
  height: 1024px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Message = styled.div`
  width: 418px;
  height: 183px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const MessageImg = styled.img`
  width: 87px;
  height: 87px;
  margin-bottom: 20px;
`;

const MessageText = styled.p`
  ${({ theme }) => theme.fonts.header6}
  color: #FFB500;
`;
