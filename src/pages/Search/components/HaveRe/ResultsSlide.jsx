import React from "react";
import styled from "styled-components";
import theme from "../../../../theme/theme";
import PolicyCard from "./Card/PolicyCard";
import EventCard from "./Card/EventCard";
import JobCard from "./Card/JobCard";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ResultsSlide = () => {
  const { policyInfo, eventInfo, jobInfo, queryName, category, categoryCount } =
    useSelector((state) => state.Search);

  const navigate = useNavigate();

  let totalInfo = [...policyInfo, ...eventInfo, ...jobInfo];

  // 정책 UI 완성 시 수정 예정
  const goToViewAll = (name) => {
    name === "정책"
      ? navigate("/job-senior")
      : name === "행사/교육"
      ? navigate("/event")
      : navigate("/job-senior");
  };
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
                    {name === "정책" ? (
                      <PolicyCard arr={arr} query={queryName} />
                    ) : name === "행사/교육" ? (
                      <EventCard arr={arr} query={queryName} />
                    ) : (
                      <JobCard arr={arr} query={queryName} />
                    )}
                  </SwiperSlide>
                ) : null;
              })}
            </Swiper>
            <ViewAll onClick={() => goToViewAll(name)}>전체보기 &gt;</ViewAll>
          </Slide>
        ) : null;
      })}
    </>
  );
};

export default ResultsSlide;

const Slide = styled.div`
  width: 1150px;
  height: 439px;
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
