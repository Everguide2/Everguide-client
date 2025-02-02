import React from "react";
import styled from "styled-components";
import { imgFrame4, imgGlasses } from "@/assets"; // 이미지 가져오기

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

// Styled-components
const CardContainer = styled.div`
  position: relative; /* 자식 요소를 상대적으로 배치 */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FrameWrapper = styled.div`
  display: flex;
  justify-content: flex-end; /* 이미지를 오른쪽으로 정렬 */
  align-items: center;
  width: 100%;
  left: 184.57px;
  top: 78.35px;
`;

const StyledImage = styled.img`
  width: 70%; /* 이미지 크기 조정 */
  height: auto; /* 비율 유지 */
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 265px; /* 하단 여백 */
  left: 70px; /* 오른쪽 여백 */
  width: 247.1px; /* 아이콘 크기 */
  height: 289.83px;
`;

const StyledIcon = styled.img`
  width: 100%; /* 아이콘 크기 조정 */
  height: auto; /* 비율 유지 */
`;
