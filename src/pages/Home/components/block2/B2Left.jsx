import React from "react";
import styled from "styled-components";
import theme from "../../../../theme/theme";
const B2Left = (dummy) => {
  return (
    <EachBoard>
      {[0, 1, 2, 3].map((number, index) => {
        return (
          <NewPolicyBox key={index}>
            <DateAndCategoryNew>
              <NewPoLocation>
                {dummy.data.data.새로나온정책[number]?.location ||
                  "데이터가 없습니다."}
              </NewPoLocation>
              <Dot>·</Dot>
              <NewPoCategory>
                {dummy.data.data.새로나온정책[number]?.category ||
                  "데이터가 없습니다."}
              </NewPoCategory>
            </DateAndCategoryNew>
            <NewPoTitle>
              {dummy.data.data.새로나온정책[number]?.content ||
                "데이터가 없습니다."}
            </NewPoTitle>
          </NewPolicyBox>
        );
      })}
    </EachBoard>
  );
};

export default B2Left;

const EachBoard = styled.div`
  display: flex;
  flex-direction: column;
  width: 515px;
  height: 340px;
  border-top: 1px solid black;
  margin-right: 42px;
`;
const NewPolicyBox = styled.button`
  display: flex;
  flex-direction: column;
  border: none;
  border-bottom: 1px solid #8f8d8a;
  background-color: #f6f4f2;
  padding-top: 7px;
  padding-bottom: 7px;
  cursor: pointer;
`;

const DateAndCategoryNew = styled.div`
  display: flex;
  margin-left: 14px;
  ${({ theme }) => theme.fonts.body4}
`;

const NewPoLocation = styled.p`
  color: #d32f2f;
  margin-right: 13px;
  // height: 32px;
`;
const Dot = styled.p`
  color: #8f8d8a;
  width: 11px;
  // height32px;
  ${({ theme }) => theme.fonts.subHeader6}
`;
const NewPoCategory = styled.p`
  color: #8f8d8a;
  // height: 32px;
`;
const NewPoTitle = styled.p`
  ${({ theme }) => theme.fonts.subHeader3}
  margin-left:14px;
`;
