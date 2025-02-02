import React from "react";
import styled from "styled-components";
import theme from "../../../../theme/theme";

const B5Right = (dummy) => {
  return (
    <JobDetail>
      <Category>{dummy.data.data[0].category}</Category>
      <JobTitle>{dummy.data.data[0].title}</JobTitle>
      <Method>{dummy.data.data[0].method}</Method>
      <LocationAndDday>
        <Location>고용노동부</Location>
        <Dday>D-9</Dday>
      </LocationAndDday>
    </JobDetail>
  );
};

export default B5Right;

const JobDetail = styled.div`
  background-color: white;
  border-radius: 34px;
  width: 440px;
  height: 331px;
  display: flex;
  flex-direction: column;
`;

const Category = styled.div`
  width: 90px;
  height: 27px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  ${({ theme }) => theme.fonts.body4}
  margin-top: 22px;
  margin-left: 22px;
  border-radius: 20px;
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
`;

const JobTitle = styled.p`
  ${({ theme }) => theme.fonts.header6}
  margin-top: 10px;
  margin-left: 22px;
`;

const Method = styled.p`
  ${({ theme }) => theme.fonts.subHeader5}
  color:#8F8D8A;
  margin-top: 6px;
  margin-left: 22px;
`;

const LocationAndDday = styled.p`
  display: flex;
  justify-content: space-between;
  margin-left: 22px;
  margin-top: auto; /* 하단으로 밀기 */
  margin-bottom: 15px;
  // background-color: black;
  width: 403px;
`;

const Location = styled.p`
  ${({ theme }) => theme.fonts.subHeader3}
  color:#4E4C49;
`;

const Dday = styled.p`
  ${({ theme }) => theme.fonts.header6}
  color:#E75058;
  padding-right: 15px;
`;
