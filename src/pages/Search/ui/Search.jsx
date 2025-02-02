import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import dummy from "../dummy";
import theme from "../../../theme/theme";
import BookMark from "../../../assets/images/img_sharp-bookmark.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Search = () => {
  const { query } = useParams();
  console.log(dummy[query]);

  const [categoryCount, setCategoryCount] = useState([0, 0, 0]);
  const [category, setCategory] = useState(["정책", "행사/교육", "일자리"]);

  const countCategory = (array) => {
    let updatedCategory = [0, 0, 0];
    array.forEach((item) => {
      if (item.category === "정책") {
        updatedCategory[0] += 1;
      } else if (item.category === "행사/교육") {
        updatedCategory[1] += 1;
      } else {
        updatedCategory[2] += 1;
      }
    });
    setCategoryCount(updatedCategory);
  };

  useEffect(() => {
    if (dummy[query]) {
      countCategory(dummy[query]);
    }
  }, [query]);

  return (
    <Wrapper>
      <SearchCount>
        <CountResult>
          <QueryText>{query}</QueryText>에
          <CountText>{dummy[query] ? dummy[query].length : 0}</CountText>개의
          검색결과가 있습니다.
        </CountResult>
      </SearchCount>

      <SearchDetails>
        {dummy[query] ? (
          <DetailContents>
            <Categories>
              {category.map((name, index) => {
                const isLast = index === category.length - 1;
                return categoryCount[index] > 0 ? (
                  <>
                    <EachCategory isOn={true} key={index}>
                      {name}
                    </EachCategory>
                    <CountCategory>({categoryCount[index]})</CountCategory>
                    {!isLast && <Contour>|</Contour>}
                  </>
                ) : (
                  <>
                    <EachCategory isOn={false} key={index}>
                      {name}
                    </EachCategory>
                    <CountCategory>({categoryCount[index]})</CountCategory>
                  </>
                );
              })}
            </Categories>
            {category.map((name, index) => {
              return categoryCount[index] > 0 ? (
                <Slide key={index}>
                  <CategoryName>{name}</CategoryName>
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={3.4}
                    modules={[Navigation]}
                    navigation={true}
                  >
                    {dummy[query].map((arr, idx) => {
                      return arr.category === name ? (
                        <SwiperSlide key={idx}>
                          <Card>
                            <CardHeader>
                              <CardCt>{arr.category}</CardCt>
                              <BookCard src={BookMark} />
                            </CardHeader>
                            <CardTitle>{arr.title}</CardTitle>
                            <CardMethod>{arr.method}</CardMethod>
                            <LocationAndDday>
                              <Location>{arr.location}</Location>
                              <Dday>{arr.remainingPeriod}</Dday>
                            </LocationAndDday>
                          </Card>
                        </SwiperSlide>
                      ) : null;
                    })}
                  </Swiper>
                </Slide>
              ) : null;
            })}
          </DetailContents>
        ) : (
          <NoResults>
            <p>검색 결과가 없습니다.</p>
          </NoResults>
        )}
      </SearchDetails>
    </Wrapper>
  );
};

export default Search;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const SearchDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const DetailContents = styled.div`
  width: 1319px;
  display: flex;
  flex-direction: column;
`;

const NoResults = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray[500]};
  text-align: center;
`;

const CountResult = styled.div`
  width: 1100px;
  display: flex;
  ${({ theme }) => theme.fonts.subHeader1};
`;

const SearchCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
`;

const QueryText = styled.span`
  color: #ffbf00;
`;

const CountText = styled.span`
  color: #ffbf00;
  margin-left: 7px;
`;

const Categories = styled.p`
  color: black;
  height: 100px;
  margin-left: 110px;
  margin-top: 20px;
  display: flex;
  ${({ theme }) => theme.fonts.subHeader5};
`;

const EachCategory = styled.div`
  color: ${({ isOn, theme }) =>
    isOn ? theme.colors.primary[500] : theme.colors.gray[500]};
`;

const CountCategory = styled.p`
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const Contour = styled.p`
  margin-left: 12px;
  margin-right: 12px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const Slide = styled.div`
  width: 1150px;
  height: 409px;
  display: flex;
  flex-direction: column;
  margin-left: 110px;
  .swiper {
    width: 100%;
    max-width: 100%;
  }

  .swiper-slide {
    flex-shrink: 0;
    width: auto;
  }
  .swiper-button-next,
  .swiper-button-prev {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 20px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  .swiper-button-next {
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
  }
  .swiper-button-disabled {
    display: none;
  }
`;

const CategoryName = styled.p`
  color: ${({ theme }) => theme.colors.primary[900]};
  ${({ theme }) => theme.fonts.header0};
`;

const Card = styled.div`
  width: 315px;
  height: 256px;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 15px;
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
  margin-left: 17px;
`;

const CardMethod = styled.div`
  ${({ theme }) => theme.fonts.caption1};
  color: ${({ theme }) => theme.colors.gray[500]};
  margin-left: 17px;
`;

const LocationAndDday = styled.p`
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
