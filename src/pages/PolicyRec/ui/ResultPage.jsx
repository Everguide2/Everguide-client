import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Title, Section, CardGrid, Card, Button, Mascot, SpeechBubble, MascotImage } from "./styleResultPage";
import { imgDangguMag } from "../../../assets";


const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const answers = location.state?.answers || {};

  // ✅ 더미데이터에서 정책 & 행사 데이터 필터링
  const recommendedPolicies = eventDummy.filter((item) => item.type === "policy").slice(0, 6); // 정책 데이터 (최대 6개)
  const recommendedEvents = eventDummy.filter((item) => item.type === "event").slice(0, 6); // 행사 데이터 (최대 6개)

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
