import React from "react";
import styled from "styled-components";
import theme from "../../../../theme/theme";

const B5Right = (dummy) => {
  return (
    <JobDetail>
      <CompanyState>
        <Company>{dummy.data.data[0].company}</Company>
        <State>{dummy.data.data[0].state}</State>
      </CompanyState>
      <JobTitle>{dummy.data.data[0].work}</JobTitle>
      <Location>{dummy.data.data[0].location}</Location>
      <Dday>{dummy.data.data[0].date}</Dday>
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
  cursor: pointer;
`;

const CompanyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  margin-top: 24px;
  margin-bottom: 50px;
  // background-color: black;
`;

const Company = styled.p`
  color: ${({ theme }) => theme.colors.state.blue};
  ${({ theme }) => theme.fonts.header5};
  margin-left: 18px;
`;

const State = styled.div`
  margin-right: 13px;
  width: 72px;
  height: 48px;
  color: white;
  ${({ theme }) => theme.fonts.subHeader3};
  background-color: ${({ theme }) => theme.colors.primary[500]};
  border: none;
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const JobTitle = styled.p`
  ${({ theme }) => theme.fonts.header0};
  font-size: 40px;
  margin-left: 20px;
  width: 237px;
  height: 64px;
  margin-bottom: 53px;
`;

const Location = styled.p`
  ${({ theme }) => theme.fonts.header6}
  color: ${({ theme }) => theme.colors.gray[700]};
  padding-right: 13px;
  height: 38px;
  margin-left: auto;
`;

const Dday = styled.p`
  ${({ theme }) => theme.fonts.header5}
  color: ${({ theme }) => theme.colors.secondary[500]};
  padding-right: 13px;
  height: 45px;
  margin-left: auto;
`;
