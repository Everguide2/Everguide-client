import React from "react";
import styled from "styled-components";
import { imgFrame4, imgGlasses } from "@/assets";

const Card4 = () => {
  return (
    <CardContainer>
      <FrameWrapper>
        <StyledImage src={imgFrame4} alt="Frame Image" />
      </FrameWrapper>
      <IconWrapper>
        <StyledIcon src={imgGlasses} alt="Glasses Icon" />
      </IconWrapper>
    </CardContainer>
  );
};

export default Card4;

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FrameWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  left: 184.57px;
  top: 78.35px;
`;

const StyledImage = styled.img`
  width: 70%; 
  height: auto;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 265px;
  left: 70px; 
  width: 247.1px;
  height: 289.83px;
`;

const StyledIcon = styled.img`
  width: 100%; 
  height: auto; 
`;
