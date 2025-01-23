import React from "react";
import styled from "styled-components";
import theme from "../../../../theme/theme";
import B5Left from "./B5Left";
import B5Right from "./B5Right";
const WeeklyJobInfo = (dummy) => {
  console.log(dummy);
  return (
    <Block5>
      <WeeklyJobBoard>
        <B5Left data={dummy} />
        <B5Right data={dummy} />
      </WeeklyJobBoard>
    </Block5>
  );
};

export default WeeklyJobInfo;

const Block5 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #ffebb0;
  margin-bottom: 177px;
`;

const WeeklyJobBoard = styled.div`
  margin-top: 59px;
  width: 1046px;
  height: 333px;
  display: flex;
  margin-bottom: 35px;
`;
