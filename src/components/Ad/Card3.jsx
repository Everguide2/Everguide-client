import React from "react";
import styled from "styled-components";
import { imgFrame3, imgFrame5, AdCalendar } from "@/assets";

const Card3 = () => {
  return (
    <CardContainer>
      <ImageWrapper>
        <BackgroundImage src={imgFrame3} alt="Background Frame" />
        <ForegroundImage src={imgFrame5} alt="Foreground Frame" />
        <CalendarImage src={AdCalendar} alt="Ad Calendar" />
      </ImageWrapper>
    </CardContainer>
  );
};

export default Card3;

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 598px;
  height: 580px;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 10px;
  left: -18.28px;
  width: 469.92px;
  height: 205.23px;
`;

const ForegroundImage = styled.img`
  position: absolute;
  top: 6.83px; 
  left: 40px; 
  width: 600.83px;
  height: 307.49px;
  z-index: 1;
`;

const CalendarImage = styled.img`
  position: absolute;
  bottom: 20px; 
  left: 50%; 
  transform: translateX(-50%);
  width: 447.49px;
  height: 309.16px; 
  z-index: 2; 
`;
