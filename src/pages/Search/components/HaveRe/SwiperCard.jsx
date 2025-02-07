import React from "react";
import styled from "styled-components";
import theme from "../../../../theme/theme";
import BookMark from "../../../../assets/images/img_sharp-bookmark.png";
const SwiperCard = ({ arr, query }) => {
  return (
    <Card>
      <CardHeader>
        <CardCt>{arr.category}</CardCt>
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
      <CardMethod>{arr.method}</CardMethod>
      <LocationAndDday>
        <Location>{arr.location}</Location>
        <Dday>{arr.remainingPeriod}</Dday>
      </LocationAndDday>
    </Card>
  );
};

export default SwiperCard;

const Card = styled.div`
  width: 310px;
  height: 256px;
  display: flex;
  flex-direction: column;
  border-radius: 26px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.5); /* 반투명 검은색 그림자 */
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 3px;
`;
const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 7px;
`;
const CardCt = styled.div`
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
  margin-right: 15px;
`;
const CardTitle = styled.div`
  ${({ theme }) => theme.fonts.subHeader3};
`;

const TitleIncludeName = styled.div`
  display: flex;
  margin-left: 17px;
`;

const NameInTitle = styled.div`
  color: #ffbf00;
  ${({ theme }) => theme.fonts.subHeader3};
`;
const CardMethod = styled.div`
  ${({ theme }) => theme.fonts.caption1};
  color: ${({ theme }) => theme.colors.gray[500]};
  margin-left: 17px;
`;
const LocationAndDday = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 22px;
  margin-top: auto;
  margin-bottom: 15px;
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
