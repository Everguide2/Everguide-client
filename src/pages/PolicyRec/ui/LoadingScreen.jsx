import React from "react";
import styled from "styled-components";
import { imgDangguMag } from "../../../assets";

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  height: 100vh;
`;

const LoadingBox = styled.div`
  background-color: ${({ theme }) => theme.colors.realWhite};
  border-radius: 42px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width : 907px;
  height : 873px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const LoadingText = styled.p`
  font-size: 20px;
  ${({theme}) => theme.fonts.header4}
  color : ${({theme}) => theme.colors.primary[500]};
  margin-bottom: 20px;
`;

const MascotImage = styled.img`
  width: 324px;
  height: 319.65px;
`;

const LoadingScreen = () => {
  return (
    <LoadingContainer>
      <LoadingBox>
        <LoadingText>정보를 열심히 찾는 중이에요!</LoadingText>
        <MascotImage src={imgDangguMag} alt="로딩 중 마스코트" />
      </LoadingBox>
    </LoadingContainer>
  );
};

export default LoadingScreen;
