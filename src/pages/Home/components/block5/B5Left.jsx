import React from "react";
import styled from "styled-components";
import theme from "../../../../theme/theme";
import { useNavigate } from "react-router-dom";
const B5Left = (dummy) => {
  const navigate = useNavigate();
  const goToJobDetail = (id) => {
    navigate(`job-senior/${id}`);
  };

  const goToSeniorJob = () => {
    navigate("job-senior");
  };

  return (
    <TitleAndList>
      <TitleLine>
        <Title>이번주의 일자리 정보</Title>
        <MoreButton onClick={() => goToSeniorJob()}>더보기 &gt;</MoreButton>
      </TitleLine>
      {/*추후 API작업 시에 바꿀 예정 */}
      {dummy.data.map((arr) => {
        return (
          <JobLine key={arr.company} onClick={() => goToJobDetail(arr.id)}>
            <Company>{arr.company}</Company>
            <Work>{arr.title} -</Work>
            <Location>{arr.location}</Location>
          </JobLine>
        );
      })}
    </TitleAndList>
  );
};

export default B5Left;

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
  cursor: pointer;
`;

const JobLine = styled.button`
  width:100%:
  height: 36px;
  display: flex;
  border:none;
  background-color: #ffebb0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary[900]};
  align-items: center;
  ${({ theme }) => theme.fonts.body2}
  font-weight:700;
  margin-bottom:4px;
  cursor:pointer;
`;

const Company = styled.p`
  color: ${({ theme }) => theme.colors.state.blue};
  margin-right: 7px;
`;

const Work = styled.p`
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-right: 4px;
`;

const Location = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};
`;
