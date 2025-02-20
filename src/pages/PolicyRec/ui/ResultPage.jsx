import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  Container, Title, Section, CardGrid, PolicyCard, EventCard, 
  Button, Mascot, SpeechBubble, MascotImage 
} from "./styleResultPage";
import { imgDangguMag } from "../../../assets";
import data from "@/test/dummy";
import { dummyData } from "@/test/eventDummy";

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const recommendedPolicies = data.새로나온정책.slice(0, 6);
  const recommendedEvents = dummyData.slice(0, 6);

  return (
    <Container>
      <Title>맞춤 분석 추천 정책</Title>
      <Section>
        <CardGrid>
          {recommendedPolicies.map((policy, index) => (
            <PolicyCard key={index}>
              <h3>{policy.content}</h3>
              <p>{policy.category}</p>
              <span>{policy.location}</span>
            </PolicyCard>
          ))}
        </CardGrid>
      </Section>

      <Title>추천하는 행사/교육</Title>
      <Section>
        <CardGrid>
          {recommendedEvents.map((event, index) => (
            <EventCard key={index}>
              {event.image && (
                <img src={event.image} alt={event.title} className="event-image" />
              )}

              <span className="category-tag">{event.category}</span>

              <h3>{event.title}</h3>

              {/* 기관 */}
              <p className="assign">{event.assign}</p>

              {/* D-Day */}
              <span className="d-day">{event.dDay ? `D-${event.dDay}` : "마감일 미정"}</span>
            </EventCard>
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
