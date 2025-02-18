import React from "react";
import styled from "styled-components";
import theme from "../../../../theme/theme";
import B2Left from "./B2Left";
import B2Right from "./B2Right";
const NewPolicies = (dummy) => {
  return (
    <Block2>
      <NewPoliciesArea>
        <TitleLine>
          <Block2Title>새로 나온 정책이에요</Block2Title>
          <ViewAll>전체보기 &gt;</ViewAll>
        </TitleLine>
        <PolicyBoard>
          <B2Left data={dummy} />
          <B2Right data={dummy} />
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
  cursor: pointer;
`;
