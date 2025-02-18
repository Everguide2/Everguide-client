import React from "react";
import styled from "styled-components";
import theme from "../../../../theme/theme";

const B1Right = (dummy) => {
  return (
    <PBox2>
      {/*현재 더미데이터에 5개를 맞춰서 넣어놨는데, 추후에는 데이터 수에 따라 어떤식으로 자를지 상의 */}
      {dummy.data.data.마감리스트?.map((data, index) => {
        return (
          <EachBox2 key={index}>
            <DateAndCategory>
              <Box2Date $isEndToday={data.state === "오늘마감"}>
                {data.state}
              </Box2Date>
              <Box2Category>{data.category}</Box2Category>
            </DateAndCategory>
            <Box2Title>{data.content}</Box2Title>
          </EachBox2>
        );
      })}
    </PBox2>
  );
};

export default B1Right;

const PBox2 = styled.div`
  margin-left: 21px;
  display: flex;
  flex-direction: column;
  width: 495px;
  height: 480px;
  border: 1px solid #aaa9a6;
  border-bottom: none;
`;

const EachBox2 = styled.div`
  width: 495px;
  height: 96px;
  border-bottom: 1px solid #cbc9c5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

const DateAndCategory = styled.div`
  display: flex;
  margin-left: 14px;
  ${({ theme }) => theme.fonts.subHeader6}
`;

const Box2Date = styled.p`
  color: ${({ isEndToday }) => (isEndToday ? "#D32F2F" : "#F9A825")};
  margin-right: 26px;
`;
const Box2Category = styled.p`
  color: #8f8d8a;
`;
const Box2Title = styled.p`
  ${({ theme }) => theme.fonts.subHeader3}
  margin-left:14px;
`;
