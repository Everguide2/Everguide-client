import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../../theme/theme";

const PoliciesThisWeek = (dummy) => {
  console.log(dummy);
  const [buttonList, setButtonList] = useState([
    "오늘마감",
    "카테고리",
    "주관 기관",
  ]);
  const [buttonIndex, setButtonIndex] = useState(0);

  const handleButtonIndex = (index) => {
    setButtonIndex(index);
  };
  return (
    <Block1>
      <ThisWeekBoard>
        <TitleWithMark>
          <Mark>!</Mark>
          <p>이번주 마감되는 정책</p>
        </TitleWithMark>
        <PoliciesBox>
          <PBox1>
            {/*추후에 이미지가 들어감. 현재는 IMG1(div)로 대체*/}
            <IMG1 />
            <B1button>
              {buttonList.map((element, index) => {
                return (
                  <EachButton
                    key={index}
                    onClick={() => handleButtonIndex(index)}
                    isActive={buttonIndex === index}
                  >
                    {element}
                  </EachButton>
                );
              })}
            </B1button>
            <PolicyTitle>
              {dummy.data.이번주마감되는정책?.[0]?.content ||
                "데이터가 없습니다."}
            </PolicyTitle>
            <BriefEx>
              {dummy.data.이번주마감되는정책?.[0]?.ex || "데이터가 없습니다."}
            </BriefEx>
          </PBox1>
          <PBox2>
            {/*현재 더미데이터에 5개를 맞춰서 넣어놨는데, 추후에는 데이터 수에 따라 어떤식으로 자를지 상의 */}
            {dummy.data.마감리스트?.map((data, index) => {
              return (
                <EachBox2 key={index}>
                  <DateAndCategory>
                    <Box2Date isEndToday={data.state === "오늘마감"}>
                      {data.state}
                    </Box2Date>
                    <Box2Category>{data.category}</Box2Category>
                  </DateAndCategory>
                  <Box2Title>{data.content}</Box2Title>
                </EachBox2>
              );
            })}
          </PBox2>
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

const PBox1 = styled.div`
  width: 598px;
  height: 481px;
  background-color: #ffe28a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #8f8d8a;
`;

const IMG1 = styled.div`
  background-color: black;
  width: 518px;
  height: 247px;
`;

const B1button = styled.div`
  display: flex;
  width: 518px;
  height: 32px;
  margin-top: 22px;
`;

const EachButton = styled.button`
  height: 32px;
  color: ${({ isActive }) => (isActive ? "#D32F2F" : "#6A6967")};
  ${({ isActive, theme }) =>
    isActive ? theme.fonts.body1 : theme.fonts.subHeader4}
  margin-right:22px;
  border: none;
  //요소를 투명하게
  background: transparent;
`;

const PolicyTitle = styled.p`
  margin-top: 4px;
  width: 518px;
  height: 38px;
  ${({ theme }) => theme.fonts.subHeader1}
`;

const BriefEx = styled.p`
  width: 518px;
  height: 52px;
  margin-top: 4px;
  ${({ theme }) => theme.fonts.body4}
`;

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
