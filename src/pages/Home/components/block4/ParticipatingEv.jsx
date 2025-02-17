import React, { useState, useRef } from "react";
import styled from "styled-components";
import theme from "../../../../theme/theme";
import EventImg from "../../../../assets/images/eventImage.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const ParticipatingEv = (dummy) => {
  // prevRef/nextRef는 클릭 후 이전 혹은 다음 버튼처럼 작동하는 요소의 CSS 선택기기
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(false); // 이전 버튼 활성화 여부
  const [isEnd, setIsEnd] = useState(true); // 이후 버튼 활성화 여부

  const handleSwiper = (swiper) => {
    //swiper.isBeginning/isEnd는 swiper에서 제공하는 메서드(슬라이더의 시작/끝여부 판단단)
    setIsBeginning(swiper.isBeginning); // 시작 슬라이드인지 여부
    setIsEnd(swiper.isEnd); // 마지막 슬라이드인지 여부
  };

  return (
    <Block4>
      <ParticipateArea>
        <Title>참여할만한 행사·프로그램</Title>
        <Swiper
          spaceBetween={36}
          slidesPerView={3.3}
          modules={[Navigation]} // Pagination 모듈 등록
          navigation={{
            // pervEl/nextEl의 경우
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={handleSwiper} // Swiper 초기화 시 호출
          onSlideChange={(swiper) => handleSwiper(swiper)} // 슬라이드 이동 시 호출
        >
          {dummy.data.map((program, idx) => {
            return (
              <SwiperSlide key={idx}>
                <ProgramBox>
                  <Poster src={EventImg} />
                  <Explaination>
                    <Host>{program?.organizer}</Host>
                    <Period>{program?.date}</Period>
                    <EventTitle>{program?.title}</EventTitle>
                  </Explaination>
                </ProgramBox>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </ParticipateArea>
      <SlideButton ref={prevRef} $left="0" disabled={isBeginning}>
        &lt;
      </SlideButton>
      <SlideButton ref={nextRef} $right="0" disabled={isEnd}>
        &gt;
      </SlideButton>
    </Block4>
  );
};

export default ParticipatingEv;

const Block4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #ec7379;
  margin-bottom: 57px;
  position: relative; /* 부모 요소에 relative를 설정하여 버튼이 그 안에서 배치되도록 합니다. */
`;

const ParticipateArea = styled.div`
  padding-top: 39px;
  width: 1118px;
  height: 707px;
`;

const Title = styled.p`
  color: #fdfdfd;
  ${({ theme }) => theme.fonts.header0}
  margin-bottom:17px;
`;

const ProgramBox = styled.div`
  background-color: white;
  width: 314px;
  height: 454px;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Poster = styled.img`
  width: 276px;
  height: 258px;
  object-fit: contain;
  margin-bottom: 18px;
`;

const Explaination = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 276px;
  height: 147px;
`;

const Host = styled.p`
  color: #4e4c49;
  ${({ theme }) => theme.fonts.subHeader4};
  margin-bottom: 10px;
`;

const Period = styled.p`
  color: #aaa9a6;
  ${({ theme }) => theme.fonts.subHeader4};
  margin-bottom: 10px;
`;

const EventTitle = styled.p`
  color: black;
  ${({ theme }) => theme.fonts.subHeader1};
  margin-bottom: 10px;
`;

const SlideButton = styled.div`
  color: ${({ disabled }) =>
    disabled ? "#ccc" : "white"}; // 비활성화 상태 색상
  width: 60px;
  height: 60px;
  font-size: 40px;
  position: absolute; /* 절대 위치로 버튼을 배치 */
  transform: translateY(-50%); /* 정확히 중앙에 맞추기 위해 transform 사용 */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  pointer-events: ${({ disabled }) =>
    disabled ? "none" : "auto"}; // 클릭 비활성화

  ${({ $left }) =>
    $left &&
    `
    left: 80px; /* 왼쪽 버튼 위치 */
  `}

  ${({ $right }) =>
    $right &&
    `
    right: 80px; /* 오른쪽 버튼 위치 */
  `}
`;
