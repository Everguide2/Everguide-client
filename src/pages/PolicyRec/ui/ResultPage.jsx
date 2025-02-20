import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  Container, Title, Section, CardGrid, PolicyCard, EventCard, 
  Mascot, SpeechBubble, MascotImage 
} from "./styleResultPage";
import { imgDangguMag } from "../../../assets";
import policyDummyData from "@/test/policyDummy"; // 정책 더미 데이터 가져오기
import { dummyData } from "@/test/eventDummy"; // 행사 더미 데이터

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 정책 & 행사 데이터 가져오기
  const recommendedPolicies = policyDummyData?.slice(0, 6) || [];
  const recommendedEvents = dummyData?.slice(0, 6) || [];

  return (
    <Container>
      <Title>맞춤 분석 추천 정책</Title>
      <Section>
        <CardGrid>
          {recommendedPolicies.map((policy, index) => (
            <PolicyCard key={index}>
              <div className="category-tag">{policy.category}</div> {/* 카테고리 태그 */}
              <h3>{policy.title}</h3> {/* 정책 제목 */}
              <p className="support">{policy.support}</p> {/* 지원 항목 */}
              <div className="assign">{policy.agency}</div> {/* 주관 기관 */}
              <div className="d-day">
                {policy.dDay ? `D-${policy.dDay}` : "상시모집"}
              </div> {/* D-Day */}
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
              <div className="category-tag">{event.category}</div> {/* 카테고리 태그 */}
              <h3>{event.title}</h3>
              <p className="assign">{event.assign}</p>
              <div className="d-day">
                {event.dDay ? `D-${event.dDay}` : "마감일 미정"}
              </div> {/* D-Day */}
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
