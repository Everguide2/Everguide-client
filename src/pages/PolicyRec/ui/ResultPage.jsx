import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Title, Section, CardGrid, Card, Button, Mascot, SpeechBubble, MascotImage } from "./styleResultPage";
import { imgDangguMag } from "../../../assets"; // ✅ Named import

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const answers = location.state?.answers || {};

  const recommendedPolicies = [
    { id: 1, title: "노인 일자리 사업 지원", category: "고용·일자리", deadline: "D-9" },
    { id: 2, title: "노인 맞춤형 건강검진", category: "보건복지", deadline: "상시모집" },
    { id: 3, title: "단독주택 지붕개량 지원", category: "생활안정", deadline: "D-7" },
  ];

  const recommendedEvents = [
    { id: 4, title: "어르신 문화누림 사업공모", category: "문화·예술", deadline: "D-12" },
    { id: 5, title: "법률 상담 및 단체활동", category: "법률지원", deadline: "D-1" },
  ];

  return (
    <Container>
      <Title>맞춤 분석 추천 정책</Title>
      <Section>
        <CardGrid>
          {recommendedPolicies.map((policy) => (
            <Card key={policy.id}>
              <h3>{policy.title}</h3>
              <p>{policy.category}</p>
              <span>{policy.deadline}</span>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Title>추천하는 행사/교육</Title>
      <Section>
        <CardGrid>
          {recommendedEvents.map((event) => (
            <Card key={event.id}>
              <h3>{event.title}</h3>
              <p>{event.category}</p>
              <span>{event.deadline}</span>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Mascot>
        <SpeechBubble>
            찾으시는 정책이 없으신가요? <br />
            <span onClick={() => navigate("/policy")}>정책추천 다시 받기</span>
        </SpeechBubble>
        <MascotImage src={imgDangguMag} alt="강아지 이미지" />
      </Mascot>
    </Container>
  );
};

export default ResultPage;
