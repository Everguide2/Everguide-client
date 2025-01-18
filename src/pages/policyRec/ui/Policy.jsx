import React, { useState } from 'react';
import { Container, BoxContainer, Button, Title, Description, TimeInfo, ImageWrapper, StyledImage } from './style';
import { questionData } from '../components/questionData.js'; // 질문 데이터 가져오기
import Question from '../components/question.jsx'; // Question 컴포넌트 가져오기
import { imgDangguMag } from '../../../assets'; // 이미지 가져오기

const Policy = () => {
  const [step, setStep] = useState(0); // 초기값을 0으로 설정
  const [answers, setAnswers] = useState({}); // 선택한 답변 저장

  const handleSelect = (option) => {
    setAnswers((prev) => ({
      ...prev,
      [step]: option, // 현재 질문에 대한 답변 저장
    }));
  };

  const handleNext = () => {
    if (step < questionData.length) {
      setStep(step + 1);
    } else {
      alert('모든 질문이 완료되었습니다!');
      console.log('사용자 답변:', answers); // 최종 답변 출력
    }
  };

  return (
    <Container>
      <BoxContainer>
        {step === 0 ? (
          <>
            <Title>나의 숨겨진 복지 혜택 찾기</Title>
            <Description>
              나에게 딱 맞는 복지정책이 있는지 찾아줍니다! <br />
              <span>찾아보기</span>를 클릭해주세요.
            </Description>
            <TimeInfo>
              예상 소요 시간 <strong>40초</strong>
            </TimeInfo>
            <ImageWrapper>
              <StyledImage src={imgDangguMag} alt="강아지 이미지" />
            </ImageWrapper>
            <Button onClick={() => setStep(1)}>찾아보기</Button>
          </>
        ) : step <= questionData.length ? (
          <>
            <Question
              questionData={questionData[step - 1]} // 현재 질문 데이터 전달
              onSelect={handleSelect}
              selectedOption={answers[step]} // step이 1부터 시작하므로 step - 1로 접근
            />
            <Button onClick={handleNext} disabled={!answers[step]}>
              {step === questionData.length ? '완료' : '다음'}
            </Button>
          </>
        ) : (
          <h2>모든 질문이 완료되었습니다!</h2>
        )}
      </BoxContainer>
    </Container>
  );
};

export default Policy;
