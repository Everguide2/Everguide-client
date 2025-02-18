import React from "react";
import styled from "styled-components";
import theme from "../../../../theme/theme";
import SwiperCard from "./SwiperCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ResultsSlide = () => {
  const { policyInfo, eventInfo, jobInfo, queryName, category, categoryCount } =
    useSelector((state) => state.Search);

  let totalInfo = [...policyInfo, ...eventInfo, ...jobInfo];
  console.log(totalInfo);
  return (
    <>
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
              {totalInfo.map((arr, idx) => {
                return arr.category === name ? (
                  <SwiperSlide key={idx}>
                    <SwiperCard arr={arr} query={queryName} />
                  </SwiperSlide>
                ) : null;
              })}
            </Swiper>
            <ViewAll>전체보기 &gt;</ViewAll>
          </Slide>
        ) : null;
      })}
    </>
  );
};

export default ResultsSlide;

const Slide = styled.div`
  width: 1150px;
  height: 409px;
  display: flex;
  flex-direction: column;
  margin-left: 110px;
  margin-bottom: 40px;
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
    background-color: ${({ theme }) => theme.colors.gray[300]};
    color: white;
    font-size: 20px;
    width: 50px;
    height: 50px;
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
  /* 화살표 아이콘 크기 조정 */
  .swiper-button-next::after {
    font-size: 25px; /* 화살표 아이콘 크기 */
    padding-left: 3px;
  }
  .swiper-button-prev::after {
    font-size: 25px; /* 화살표 아이콘 크기 */
    padding-right: 3px;
  }
`;
const CategoryName = styled.p`
  color: ${({ theme }) => theme.colors.primary[900]};
  ${({ theme }) => theme.fonts.header0};
  margin-bottom: 20px;
`;

const ViewAll = styled.button`
  height: 32px;
  margin-left: auto;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary[700]};
  ${({ theme }) => theme.fonts.subHeader3};
  margin-top: 24px;
  cursor: pointer;
`;
