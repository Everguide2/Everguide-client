import React from "react";
import styled from "styled-components";
import ErrorHeader from "../ErrorHeader";
import theme from "../../../../theme/theme";
import TrafficCone from "../../../../assets/images/img-trafficCone.svg";
const TimeOut = () => {
  return (
    <Screen>
      <ErrorHeader />
      <MessageArea>
        <Message>
          <MessageImg src={TrafficCone} alt="안전콘콘 이미지" />
          <MessageText1>문제가 생겼어요!</MessageText1>
          <MessageText2>새로고침을 시도해주세요!</MessageText2>
          <AddMessage>그래도 안된다면 고객센터로 연락해주세요</AddMessage>
          <RefreshButton>새로고침</RefreshButton>
          <ServCenterButton>고객센터</ServCenterButton>
        </Message>
      </MessageArea>
    </Screen>
  );
};

export default TimeOut;

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
  width: 600px;
  height: 387px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background-color: black;
`;
const MessageImg = styled.img`
  width: 87px;
  height: 87px;
  margin-bottom: 20px;
`;

const MessageText1 = styled.p`
  ${({ theme }) => theme.fonts.header6}
  color: #FFB500;
`;

const MessageText2 = styled.p`
  ${({ theme }) => theme.fonts.header6}
  color: #FFB500;
  margin-bottom: 12px;
`;

const AddMessage = styled.p`
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  line-height: 160%;
  letter-spacing: 0%;
  color: ${({ theme }) => theme.colors.gray[300]};
  margin-bottom: 40px;
`;

const RefreshButton = styled.button`
  width: 100%;
  height: 58px;
  border: none;
  border-radius: 12px;
  background-color: #ffb500;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  letter-spacing: 0%;
  margin-bottom: 12px;
`;
const ServCenterButton = styled.button`
  width: 100%;
  height: 58px;
  border: 2px solid #fff5d4; /* border의 두께와 색상을 명시 */
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  letter-spacing: 0%;
  color: #787878;
  background-color: white;
`;
