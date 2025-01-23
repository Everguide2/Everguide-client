import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../../../theme/theme";
import B1Left from "./B1Left";
import B1Right from "./B1Right";
const PoliciesThisWeek = (dummy) => {
  console.log(dummy);
  return (
    <Block1>
      <ThisWeekBoard>
        <TitleWithMark>
          <Mark>!</Mark>
          <p>이번주 마감되는 정책</p>
        </TitleWithMark>
        <PoliciesBox>
          <B1Left data={dummy} />
          <B1Right data={dummy} />
        </PoliciesBox>
      </ThisWeekBoard>
    </Block1>
  );
};

export default PoliciesThisWeek;

const Block1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  // background-color: black;
  margin-bottom: 57px;
`;
const ThisWeekBoard = styled.div`
  display: flex;
  flex-direction: column;
  width: 1114px;
  height: 570px;
  // background-color: black;
  margin-top: 34px;
`;
const TitleWithMark = styled.div`
  display: flex;
  gap: 12px; /* !와 텍스트 사이의 간격 */
  ${({ theme }) => theme.fonts.header0}
  margin-bottom:20px;
`;

const Mark = styled.p`
  color: ${({ theme }) => theme.colors.state.yellow};
`;

const PoliciesBox = styled.div`
  display: flex;
`;
