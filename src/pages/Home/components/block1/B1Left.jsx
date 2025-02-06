import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../../../theme/theme";

const B1Left = (dummy) => {
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
    <PBox1>
      {/*추후에 이미지가 들어감. 현재는 IMG1(div)로 대체*/}
      <IMG1 />
      <B1button>
        {buttonList.map((element, index) => {
          return (
            <EachButton
              key={index}
              onClick={() => handleButtonIndex(index)}
              $isActive={buttonIndex === index}
            >
              {element}
            </EachButton>
          );
        })}
      </B1button>
      <PolicyTitle>
        {dummy.data.data.이번주마감되는정책?.[0]?.content ||
          "데이터가 없습니다."}
      </PolicyTitle>
      <BriefEx>
        {dummy.data.data.이번주마감되는정책?.[0]?.ex || "데이터가 없습니다."}
      </BriefEx>
    </PBox1>
  );
};

export default B1Left;

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
