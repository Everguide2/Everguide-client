import React from "react";
import styled from "styled-components";
import theme from "../../../theme/theme";

const NewPolicies = (dummy) => {
  return (
    <Block2>
      <NewPoliciesArea>
        <TitleLine>
          <Block2Title>새로 나온 정책이에요</Block2Title>
          <ViewAll>전체보기 &gt;</ViewAll>
        </TitleLine>
        <PolicyBoard>
          <EachBoard>
            {[0, 1, 2, 3].map((number, index) => {
              return (
                <NewPolicyBox>
                  <DateAndCategoryNew>
                    <NewPoDate>
                      {dummy.data.새로나온정책[number]?.state ||
                        "데이터가 없습니다."}
                    </NewPoDate>
                    <Dot>·</Dot>
                    <NewPoCategory>
                      {dummy.data.새로나온정책[number]?.category ||
                        "데이터가 없습니다."}
                    </NewPoCategory>
                  </DateAndCategoryNew>
                  <NewPoTitle>
                    {dummy.data.새로나온정책[number]?.content ||
                      "데이터가 없습니다."}
                  </NewPoTitle>
                </NewPolicyBox>
              );
            })}
          </EachBoard>
          <EachBoard>
            {[4, 5, 6, 7].map((number, index) => {
              return (
                <NewPolicyBox>
                  <DateAndCategoryNew>
                    <NewPoDate>
                      {dummy.data.새로나온정책[number]?.state ||
                        "데이터가 없습니다."}
                    </NewPoDate>
                    <Dot>·</Dot>
                    <NewPoCategory>
                      {dummy.data.새로나온정책[number]?.category ||
                        "데이터가 없습니다."}
                    </NewPoCategory>
                  </DateAndCategoryNew>
                  <NewPoTitle>
                    {dummy.data.새로나온정책[number]?.content ||
                      "데이터가 없습니다."}
                  </NewPoTitle>
                </NewPolicyBox>
              );
            })}
          </EachBoard>
        </PolicyBoard>
      </NewPoliciesArea>
    </Block2>
  );
};

export default NewPolicies;

const Block2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f6f4f2;
`;

const NewPoliciesArea = styled.div`
  width: 1110px;
  height: 548px;
  background: transparent;
`;

const TitleLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  margin-bottom: 12px;
`;

const PolicyBoard = styled.div`
  width: 1110px;
  height: 340px;
  display: flex;
`;

const Block2Title = styled.p`
  ${({ theme }) => theme.fonts.header0}
`;

const ViewAll = styled.button`
  width: 120px;
  height: 37px;
  border: none;
  background-color: #ffbf00;
  color: white;
  ${({ theme }) => theme.fonts.subHeader5}
`;

const EachBoard = styled.div`
  display: flex;
  flex-direction: column;
  width: 515px;
  height: 340px;
  border-top: 1px solid black;
  margin-right: 42px;
`;
const NewPolicyBox = styled.div`
  // background-color: black;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #8f8d8a;
  padding-top: 7px;
  padding-bottom: 7px;
`;

const DateAndCategoryNew = styled.div`
  display: flex;
  margin-left: 14px;
  ${({ theme }) => theme.fonts.body4}
`;

const NewPoDate = styled.p`
  color: #d32f2f;
  margin-right: 26px;
  width: 68px;
  // height: 32px;
`;
const Dot = styled.p`
  color: #8f8d8a;
  width: 18px;
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
