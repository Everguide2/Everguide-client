import React from "react";
import styled from "styled-components";
import ErrorHeader from "../ErrorHeader";
import {useCustomNavigation} from "@hooks/useCustomNavigation.js";
import Error404Img from "../../../../assets/images/img-Group33906.svg";
const Error404 = () => {
  const {navigateTo} = useCustomNavigation();

  return (
    <Screen>
      <ErrorHeader />
      <MessageArea>
        <Message>
          <ErrorName>404 ERROR</ErrorName>
          <DetailError>죄송합니다. 페이지를 찾을 수 없습니다.</DetailError>
          <DetailError>존재하지 않는 주소를 입력하셨거나,</DetailError>
          <DetailError>
            요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
          </DetailError>
          <ErrorImg src={Error404Img} alt="404이미지" />
          <HomeButton onClick={() => navigateTo("/")}>홈으로</HomeButton>
        </Message>
      </MessageArea>
    </Screen>
  );
};

export default Error404;

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
  width: 670px;
  //   height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //   background-color: black;
`;

const ErrorName = styled.p`
  font-family: "NanumGothic", sans-serif;
  font-weight: 700;
  font-size: 64px;
  line-height: normal;
  margin-bottom: 51px;
`;

const DetailError = styled.p`
  ${({ theme }) => theme.fonts.subHeader4}
  letter-spacing: 5px;
  margin-bottom: 19px;
`;

const ErrorImg = styled.img`
  width: 409px;
  height: 208px;
  margin-top: 30px;
  margin-bottom: 75px;
`;

const HomeButton = styled.button`
  width: 125px;
  height: 62px;
  background-color: white;
  border: none;
  ${({ theme }) => theme.fonts.header0}
  font-size: 40px;
  text-decoration: underline;
  text-decoration-thickness: 4px;
  text-underline-offset: 11px;
  cursor: pointer;
`;
