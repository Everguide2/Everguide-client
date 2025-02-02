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

// Styled-components
const CardContainer = styled.div`
  position: relative; /* 자식 요소를 겹치게 배치하기 위한 기준 설정 */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  position: relative; /* 이미지 요소들이 겹칠 수 있도록 설정 */
  width: 598px; /* 컨테이너 크기 */
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
  top: 6.83px; /* 배경 이미지 위에서 약간 아래로 이동 */
  left: 40px; /* 배경 이미지 위에서 약간 오른쪽으로 이동 */
  width: 600.83px; /* 앞 이미지 크기 조정 */
  height: 307.49px;
  z-index: 1; /* 배경보다 위에 렌더링되도록 설정 */
`;

const CalendarImage = styled.img`
  position: absolute;
  bottom: 20px; /* 하단 위치 */
  left: 50%; /* 중앙 정렬 */
  transform: translateX(-50%);
  width: 447.49px;
  height: 309.16px; /* 이미지 크기 조정 */
  z-index: 2; /* 가장 앞에 렌더링되도록 설정 */
`;
