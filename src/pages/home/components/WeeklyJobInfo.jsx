import React from "react";
import styled from "styled-components";
import theme from "../../../theme/theme";

const WeeklyJobInfo = (dummy) => {
  console.log(dummy);
  return (
    <Block5>
      <WeeklyJobBoard>
        <TitleAndList>
          <TitleLine>
            <Title>이번주의 일자리 정보</Title>
            <MoreButton>더보기 &gt;</MoreButton>
          </TitleLine>
          {/*추후 API작업 시에 바꿀 예정 */}
          {[0, 1, 2, 3, 4, 5].map((number) => {
            return <JobLine>{dummy.data[0].content}</JobLine>;
          })}
        </TitleAndList>
        <JobDetail>
          <Category>{dummy.data[0].category}</Category>
          <JobTitle>{dummy.data[0].title}</JobTitle>
          <Method>{dummy.data[0].method}</Method>
          <LocationAndDday>
            <Location>고용노동부</Location>
            <Dday>D-9</Dday>
          </LocationAndDday>
        </JobDetail>
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

const TitleAndList = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`;

const TitleLine = styled.div`
  display: flex;
  align-items: center;
  width: 576px;
  height: 70px;
  margin-bottom: 27px;
`;

const Title = styled.div`
  ${({ theme }) => theme.fonts.header0}
  margin-right:63px;
`;

const MoreButton = styled.button`
  width: 110px;
  height: 37px;
  background-color: #ffbf00;
  border: none;
  ${({ theme }) => theme.fonts.subHeader5}
  color:#FDFDFD;
  word-spacing: 12px;
`;

const JobLine = styled.div`
  //   width: 576px;
  height: 36px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary[900]};
  align-items: center;
  ${({ theme }) => theme.fonts.body2}
  margin-bottom:4px;
`;

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
