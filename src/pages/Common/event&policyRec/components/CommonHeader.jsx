import React from 'react';
import {DropDown} from "@components/index.js";
import {TabMenu} from "@pages/Common/event&policyRec/components/index.js";
import {styled} from "styled-components";

// eslint-disable-next-line react/prop-types
const CommonHeader = ({total, listData, activeTab, onClickTab, type}) => {
  return (
      <Container>
        <Total $type={type}>총 {total}개</Total>
        <Setting>
          <DropDown initial={"정렬"} items={listData}/>
          <TabMenu activeTab={activeTab} onClickTab={onClickTab}/>
        </Setting>
      </Container>
  );
};

export default CommonHeader;

export const Container = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  box-sizing: border-box;
`

export const Total = styled.p`
  ${({theme, $type}) => $type === "big" ? theme.fonts.body4 : theme.fonts.caption1}
`

export const Setting = styled.div`
  display: flex;
  gap: 16px;
  margin-right: 30px;
`