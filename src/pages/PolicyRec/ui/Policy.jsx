import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux"; 
import { useNavigate } from "react-router-dom";
import { 
  Container, BoxContainer, Button, QuestionContainer, 
  Title, Description, OptionsContainer, OptionButton, 
  NextButton, TimeInfo, ImageWrapper, StyledImage 
} from './style';
import { questionData } from '../components/questionData.js';
import { imgDangguMag } from '../../../assets';
import LoginModal from "../feature/LoginModal.jsx"; 
import ScrollToTop from '@/utils/scrollToTop';
import LoadingScreen from './LoadingScreen';  // ✅ 로딩 화면 추가

const Policy = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); 
  const [answers, setAnswers] = useState({});
  const [isStarted, setIsStarted] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [currentQuestionId, setCurrentQuestionId] = useState("start");
  const [isLoading, setIsLoading] = useState(false);  // ✅ 로딩 상태 추가

  const currentQuestion = questionData.find((q) => q.id === currentQuestionId) || null;

  // ✅ "완료" 버튼 클릭 시 실행
  const handleNext = () => {
    if (!currentQuestion) return;

    const selectedAnswer = answers[currentQuestionId];
    if (!selectedAnswer || (Array.isArray(selectedAnswer) && selectedAnswer.length === 0)) return;

    const nextQuestion = currentQuestion.options.find(opt => opt.text === (Array.isArray(selectedAnswer) ? selectedAnswer[0] : selectedAnswer));

    if (!nextQuestion?.nextId || nextQuestion?.nextId === "null") {
      console.log("로딩 시작! isLoading = true 설정");
      setIsLoading(true);  // ✅ 로딩 시작

      setTimeout(() => {
        console.log("결과 페이지로 이동!");
        navigate("/result", { state: { answers } });
      }, 2000);  // ✅ 2초 후 결과 페이지로 이동
    } else {
      setCurrentQuestionId(nextQuestion.nextId);
    }
  };

  return (
    <>
     <ScrollToTop />
      {!isLoading ? (  // ✅ 로딩 중이면 로딩 화면 표시
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
              <Button onClick={() => setIsStarted(true)}>찾아보기</Button>
            </BoxContainer>
          ) : (
            <QuestionContainer>
              <Title>{Object.keys(answers).length + 1}/5</Title>
              <Description>{currentQuestion?.question}</Description>
              <OptionsContainer>
                {currentQuestion?.options?.map((option) => (
                  <OptionButton
                    key={option.text}
                    onClick={() => setAnswers(prev => ({ ...prev, [currentQuestionId]: option.text }))}
                    className={answers[currentQuestionId] === option.text ? "selected" : ""}
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
