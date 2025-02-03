import React, { useState } from 'react';
import { Container, BoxContainer, Button,QuestionContainer, Title, Description,OptionsContainer,OptionButton,NextButton, TimeInfo, ImageWrapper, StyledImage } from './style';
import { questionData } from '../components/questionData.js';
import Question from '../components/question.jsx';
import { imgDangguMag } from '../../../assets';

const Policy = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState("start");
  const [answers, setAnswers] = useState({});
  const [isStarted, setIsStarted] = useState(false);

  const currentQuestion = questionData.find((q) => q.id === currentQuestionId);

  const handleSelect = (option) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionId]: option.text,
    }));
  };

  const handleNext = () => {
    if (!currentQuestion) return;
    
    const selectedAnswer = answers[currentQuestionId];
    if (!selectedAnswer) return;

    const nextQuestion = currentQuestion.options.find(opt => opt.text === selectedAnswer);

    if (nextQuestion?.nextId) {
      setCurrentQuestionId(nextQuestion.nextId);
    } else {
      alert("모든 질문이 완료되었습니다!");
      console.log("최종 답변:", answers);
    }
  };

  return (
    <Container>
      
        {!isStarted ? (
          <>
          <BoxContainer>
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
            <Button onClick={() => setIsStarted(true)}>찾아보기</Button>
          </BoxContainer>
          </>
        ) : (
          <>
          <QuestionContainer>
            <Title>{questionData.findIndex(q => q.id === currentQuestionId) + 1}/10</Title>
            <Description>{currentQuestion?.question}</Description>
            
            <OptionsContainer className={["location", "familyLocation"].includes(currentQuestionId) ? "grid-layout" : ""}>
              {currentQuestion?.options.map((option) => (
                <OptionButton 
                key={option.text} 
                onClick={() => handleSelect(option)}
                className={answers[currentQuestionId] === option.text ? "selected" : ""}
              >
                {option.text}
              </OptionButton>
              ))}
            </OptionsContainer>

            <NextButton 
              onClick={handleNext} 
              disabled={!answers[currentQuestionId]} 
            >
              {currentQuestion?.options.some(opt => opt.nextId) ? "다음" : "완료"}
            </NextButton>
          </QuestionContainer>

          </>

        )}
    </Container>
  );
};

export default Policy;