import React from "react";
import styled from "styled-components";
import theme from "@/theme/theme";
import ExImg from "../../../../../assets/images/img-test.png";
import BookMark from "../../../../../assets/images/img_sharp-bookmark.png";
const PolicyCard = ({ arr, query }) => {
  console.log(arr);
  return (
    <Card>
      <CardHeader>
        <CardCt>{arr.type}</CardCt>
        <BookCard src={BookMark} />
      </CardHeader>
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
      <LocationAndDday>
        <Location>{arr.location}</Location>
        {arr.remainingPeriod === "-1" ? (
          <Dday>마감</Dday>
        ) : arr.remainingPeriod === "0" ? (
          <Dday>D-Day</Dday>
        ) : (
          <Dday>D-{arr.remainingPeriod}</Dday>
        )}
      </LocationAndDday>
    </Card>
  );
};

export default PolicyCard;

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
  height: 178px;
  justify-content: space-between;
  margin-bottom: 7px;
  width: 100%;
  background-image: url(${ExImg});
  background-size: cover; /* 배경을 div 크기에 맞게 조정 */
  background-position: center; /* 이미지를 가운데 정렬 */
  background-repeat: no-repeat; /* 반복 제거 */
  border-radius: 26px 26px 0 0;
`;
const CardCt = styled.div`
  padding-left: 5px;
  padding-right: 5px;
  height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-left: 15px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
`;
const BookCard = styled.img`
  width: 25px;
  height: 33px;
  margin-right: 20px;
`;
const CardTitle = styled.div`
  ${({ theme }) => theme.fonts.subHeader3};
`;

const TitleIncludeName = styled.div`
  display: flex;
  margin-left: 17px;
  margin-bottom: 31px;
`;

const NameInTitle = styled.div`
  color: #ffbf00;
  ${({ theme }) => theme.fonts.subHeader3};
`;
const LocationAndDday = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 22px;
  margin-top: auto;
  margin-bottom: 15px;
`;
const Location = styled.p`
  ${({ theme }) => theme.fonts.caption1}
  color:#4E4C49;
  margin-top: 4px;
`;
const Dday = styled.p`
  ${({ theme }) => theme.fonts.body3}
  color:#E75058;
  padding-right: 15px;
`;
