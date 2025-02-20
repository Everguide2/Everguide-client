import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  Container, Title, Section, CardGrid, PolicyCard, EventCard, 
  Mascot, SpeechBubble, MascotImage 
} from "./styleResultPage";
import { imgDangguMag } from "../../../assets";
import policyDummyData from "@/test/policyDummy"; 
import { dummyData } from "@/test/eventDummy"; 

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const recommendedPolicies = policyDummyData?.slice(0, 6) || [];
  const recommendedEvents = dummyData?.slice(0, 6) || [];

  return (
    <Container>
      <Title>맞춤 분석 추천 정책</Title>
      <Section>
        <CardGrid>
          {recommendedPolicies.map((policy, index) => (
            <PolicyCard key={index}>
              <div className="category-tag">{policy.category}</div> 
              <h3>{policy.title}</h3> 
              <p className="support">{policy.support}</p> 
              <div className="assign">{policy.agency}</div> 
              <div className="d-day">
                {policy.dDay ? `D-${policy.dDay}` : "상시모집"}
              </div>
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
              <div className="category-tag">{event.category}</div> 
              <h3>{event.title}</h3>
              <p className="assign">{event.assign}</p>
              <div className="d-day">
                {event.dDay ? `D-${event.dDay}` : "마감일 미정"}
              </div> 
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
