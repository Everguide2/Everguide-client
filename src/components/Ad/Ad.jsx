import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import { string } from "../../constants";

const Ad = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 카드별 컴포넌트 배열
  const cardComponents = [<Card1 />, <Card2 />, <Card3 />, <Card4 />];

  // slides 배열을 string.cards와 cardComponents를 이용해 동적으로 생성
  const slides = string.cards.map((card, index) => (
    <Card key={index}>
      {cardComponents[index]} {/* 카드 컴포넌트 삽입 */}
      <TextWrapper>
        <CardTitle>{card.title}</CardTitle>
        <CardDescription>{card.description}</CardDescription>
      </TextWrapper>
    </Card>
  ));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <SliderContainer>
      {slides.map((slide, index) => (
        <Slide key={index} isActive={index === currentSlide}>
          {slide}
        </Slide>
      ))}
      <Dots>
        {slides.map((_, index) => (
          <Dot
            key={index}
            isActive={index === currentSlide}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </Dots>
    </SliderContainer>
  );
};

export default Ad;

// Styled-components
const SliderContainer = styled.div`
  width: 598px;
  height: 840px;
  position: relative;
  z-index: 3;
`;

const Slide = styled.div`
  display: ${({ isActive }) => (isActive ? "block" : "none")};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Dots = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 18px;
`;

const Dot = styled.button`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary[500] : theme.colors.gray[200]};
  border: none;
  cursor: pointer;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 35px;
  width: 100%;
  height: 100%;
  border: 10px solid #ffe28a;
  border-radius: 31.34px;
  background-color: ${({ theme }) => theme.colors.realWhite};
`;

const TextWrapper = styled.div`
  text-align: center;
  margin-bottom: 150px;
`;

const CardTitle = styled.h3`
  ${({ theme }) => theme.fonts.header4};
  color: #6b5000;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.gray[700]};
  text-align: center;
  white-space: pre-line;
`;
