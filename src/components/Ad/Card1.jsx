import React from "react";
import styled from "styled-components";
import { imgFrame1, imgMouse } from "@/assets";

const Card1 = () => {
  return (
    <CardContainer>
      <ImageWrapper>
        <FrameImage src={imgFrame1} alt="Frame" />
        <MouseImage src={imgMouse} alt="Mouse" />
      </ImageWrapper>
    </CardContainer>
  );
};

export default Card1;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const ImageWrapper = styled.div`
  position: relative; 
  width: 300px; 
  height: 364px;
`;

const FrameImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto; 
`;

const MouseImage = styled.img`
  position: absolute;
  left: 250px;
  top: 190px;
  width: 70px;
  height: 96px;
`;
