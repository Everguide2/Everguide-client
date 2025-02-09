import React from "react";
import styled from "styled-components";
import ErrorHeader from "../ErrorHeader";
import theme from "../../../../theme/theme";
import RocketImg from "../../../../assets/images/img-rocket.svg";
const LoggingIn = () => {
  return (
    <Screen>
      <ErrorHeader />
      <MessageArea>
        <Message>
          <MessageImg src={RocketImg} alt="로켓이미지" />
          <MessageText>로그인 중입니다!</MessageText>
        </Message>
      </MessageArea>
    </Screen>
  );
};

export default LoggingIn;

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
  width: 494px;
  height: 140px;
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
  ${({ theme }) => theme.fonts.subHeader3}
  color: #FFB500;
`;
