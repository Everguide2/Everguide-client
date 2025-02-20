import React from "react";
import styled from "styled-components";
import theme from "@/theme/theme";
import { useNavigate } from "react-router-dom";
import BookMark from "../../../../../assets/images/img_sharp-bookmark.png";
const JobCard = ({ arr, query }) => {
  const navigate = useNavigate();

  const goToDetailJob = (id) => {
    navigate(`/job-senior/${id}`);
  };

  return (
    <Card onClick={() => goToDetailJob(arr.id)}>
      <CardHeader>
        <CardCompany>{arr.company}</CardCompany>
        <BookCard src={BookMark} />
      </CardHeader>
      <Location>{arr.location}</Location>
      <TitleIncludeName>
        {arr.title.includes(query) ? (
          <>
            <CardTitle>
              {arr.title.slice(0, arr.title.indexOf(query))}
            </CardTitle>
            <NameInTitle>{query}</NameInTitle>
            <CardTitle>
              {arr.title.slice(arr.title.indexOf(query) + query.length)}
            </CardTitle>
          </>
        ) : (
          <CardTitle>{arr.title}</CardTitle>
        )}
      </TitleIncludeName>
      <StateAndDuration>
        {arr.remainingPeriod === "-1" ? (
          <State>마감</State>
        ) : arr.remainingPeriod === "0" ? (
          <State>D-Day</State>
        ) : (
          <State>접수중</State>
        )}
        <Duration>{arr.duration}</Duration>
      </StateAndDuration>
    </Card>
  );
};

export default JobCard;

const Card = styled.div`
  width: 310px;
  height: 272px;
  display: flex;
  flex-direction: column;
  border-radius: 26px;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.11);
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 3px;
  cursor: pointer;
`;
const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 7px;
`;
const CardCompany = styled.div`
  ${({ theme }) => theme.fonts.subHeader5};
  color: ${({ theme }) => theme.colors.state.blue};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-left: 20px;
`;
const Location = styled.p`
  ${({ theme }) => theme.fonts.subHeader5}
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-left: 20px;
  margin-bottom: 38px;
`;
const BookCard = styled.img`
  width: 25px;
  height: 33px;
  margin-right: 20px;
`;

const CardTitle = styled.div`
  ${({ theme }) => theme.fonts.header0};
  font-size: 32px;
`;

const TitleIncludeName = styled.div`
  display: flex;
  margin-left: 17px;
`;

const NameInTitle = styled.div`
  color: #ffbf00;
  ${({ theme }) => theme.fonts.header0};
  font-size: 32px;
`;
const StateAndDuration = styled.div`
  display: flex;
  align-items: center;
  //   justify-content: space-between;
  width: 100%;
  margin-left: 16px;
  margin-top: auto;
  margin-bottom: 15px;
`;

const State = styled.div`
  width: 53px;
  height: 34px;
  ${({ theme }) => theme.fonts.caption1};
  background-color: ${({ theme }) => theme.colors.primary[500]};
  color: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 7px;
`;

const Duration = styled.p`
  ${({ theme }) => theme.fonts.subHeader3};
  color: ${({ theme }) => theme.colors.secondary[500]};
  font-size: 18px;
`;
