import React, { useState } from 'react';
import { useSelector } from "react-redux"; 
import { 
  Container, BoxContainer, Button, QuestionContainer, 
  Title, Description, OptionsContainer, OptionButton, 
  NextButton, TimeInfo, ImageWrapper, StyledImage 
} from './style';
import  {questionData} from "@test/questionData.js";
import { imgDangguMag } from '../../../assets';
import LoginModal from "../feature/LoginModal.jsx"; 
import { useNavigate } from "react-router-dom";
import ScrollToTop from '@/utils/scrollToTop';
import LoadingScreen from './LoadingScreen';

const Policy = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); 
  const [answers, setAnswers] = useState({});
  const [isStarted, setIsStarted] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false); 
  const [currentQuestionId, setCurrentQuestionId] = useState("start"); 
  const [isLoading, setIsLoading] = useState(false); 

  const currentQuestion = questionData.find((q) => q.id === currentQuestionId) || null;

  const handleStart = () => {
    if (!isAuthenticated) {
      setIsStarted(true);
    } else {
      setShowLoginModal(true); 
    }
  };

  const getQuestionNumber = (currentId) => {
    if (!currentId || currentId === "start") return 0;
    const isFamily = currentId.startsWith("family");
    const filteredQuestions = questionData.filter(q => q.id !== "start");
    const groupQuestions = filteredQuestions.filter(q =>
      isFamily ? q.id.startsWith("family") : !q.id.startsWith("family")
    );
    return groupQuestions.findIndex(q => q.id === currentId) + 1;
  };

  const handleSelect = (option) => {
    setAnswers((prev) => {
      if (currentQuestionId === "needs" || currentQuestionId === "familyNeeds") { 
        const selectedOptions = prev[currentQuestionId] || [];
        if (selectedOptions.includes(option.text)) {
          return { ...prev, [currentQuestionId]: selectedOptions.filter(item => item !== option.text) };
        } else {
          return { ...prev, [currentQuestionId]: [...selectedOptions, option.text] };
        }
      } else {
        return { ...prev, [currentQuestionId]: option.text };
      }
    });
  };

  const handleNext = () => {
    if (!currentQuestion) return;
  
    const selectedAnswer = answers[currentQuestionId];
  
    if (!selectedAnswer || (Array.isArray(selectedAnswer) && selectedAnswer.length === 0)) return;
  
    const nextQuestion = currentQuestion.options.find(opt => 
      Array.isArray(selectedAnswer) 
        ? selectedAnswer.includes(opt.text) 
        : opt.text === selectedAnswer
    );
  
    if (!nextQuestion?.nextId || nextQuestion?.nextId === "null") {
      setIsLoading(true);
      setTimeout(() => {
        navigate("/result", { state: { answers } });
      }, 2000);
    } else {
      setCurrentQuestionId(nextQuestion.nextId);
    }
  };
  

  return (
    <>
      <ScrollToTop />
      {isLoading ? (  
        <LoadingScreen />
      ) : (
        <Container>
          {!isStarted ? (
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
              <Button onClick={handleStart}>찾아보기</Button>
            </BoxContainer>
          ) : (
            <QuestionContainer>
              <Title>{getQuestionNumber(currentQuestionId) + 1}/5</Title>
              <Description>{currentQuestion?.question}</Description>
              <OptionsContainer className={["location", "familyLocation"].includes(currentQuestionId) ? "grid-layout" : ""}>
                {currentQuestion?.options?.map((option) => (
                  <OptionButton
                    key={option.text}
                    onClick={() => handleSelect(option)}
                    className={Array.isArray(answers[currentQuestionId]) 
                      ? (answers[currentQuestionId].includes(option.text) ? "selected" : "") 
                      : (answers[currentQuestionId] === option.text ? "selected" : "")
                    }
                  >
                    {option.text}
                  </OptionButton>
                ))}
              </OptionsContainer>
              <NextButton onClick={handleNext} disabled={!answers[currentQuestionId]}>
                {currentQuestion?.options?.some(opt => opt.nextId) ? "다음" : "완료"}
              </NextButton>
            </QuestionContainer>
          )}

          {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
        </Container>
      )}
    </>
  );
};

export default Policy;