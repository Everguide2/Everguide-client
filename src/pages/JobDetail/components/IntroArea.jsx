import React from "react";
import styled from "styled-components";
import theme from "@/theme/theme.js";
import { string } from "@constants/index.js";
import DogImg from "@assets/images/img-dog.svg";
const IntroArea = () => {
  return (
    <Intro>
      <IntroTitle>일자리 더보기</IntroTitle>
      <IntroEx>
        {string.seemorejob1.map((str) => {
          return <EachEx key={str.text}>{str.text}</EachEx>;
        })}
        <IntroImg src={DogImg} />
      </IntroEx>
    </Intro>
  );
};

export default IntroArea;

const Intro = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary[100]};
`;

const IntroTitle = styled.p`
  ${({ theme }) => theme.fonts.header1};
  margin-bottom: 41px;
`;

const IntroEx = styled.div`
  width: 1313px;
  height: 184px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  position: relative;
`;

const EachEx = styled.p`
  ${({ theme }) => theme.fonts.header5};
  color: ${({ theme }) => theme.colors.gray[700]};
`;

const IntroImg = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: -65px;
  left: -50px;
`;
