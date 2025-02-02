import React from "react";
import styled from "styled-components";
import { imgMap } from "@/assets"; // 이미지 가져오기

const Card2 = () => {
  return (
    <CardContainer>
      <MapImage src={imgMap} alt="Map" />
    </CardContainer>
  );
};

export default Card2;

// Styled-components
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

`;

const MapImage = styled.img`
  width: 473px; /* 이미지 너비를 컨테이너에 맞게 설정 */
  height: 404px; /* 비율 유지 */
`;
