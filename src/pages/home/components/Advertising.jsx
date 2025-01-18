import React from "react";
import styled from "styled-components";
import theme from "../../../theme/theme";
import Ad1 from "../../../assets/images/ad1.png";

// 해당 광고 방식이 슬라이스 방식인지, 슬라이스라면 어떤 식으로 배너가 넘어가야 하는지 회의 때 질문

const Advertising = () => {
  return (
    <Block3>
      <AdArea>
        <AdImg src={Ad1} />
      </AdArea>
    </Block3>
  );
};

export default Advertising;

const Block3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 263px;
`;

const AdArea = styled.div`
  width: 1113px;
  height: 151px;
`;

const AdImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain; /* 이미지 비율을 유지하면서 크기를 맞춤 */
`;
