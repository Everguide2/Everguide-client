const dummy = {
  치료: {
    정책: [
      {
        category: "정책",
        title: "치료 의료 정책 개편안", // 치료 포함
        method: "· 온라인 예약",
        location: "서울병원 본관 305호",
        lastModified: "2024-09-30",
        remainingPeriod: "50",
        type: "의료", // type 추가
      },
      {
        category: "정책",
        title: "치료 비대면 진료 확대", // 치료 포함
        method: "· 화상 상담",
        location: "부산병원 502호",
        lastModified: "2024-08-20",
        remainingPeriod: "30",
        type: "의료", // type 추가
      },
      {
        category: "정책",
        title: "치료 응급 의료 지원 강화", // 치료 포함
        method: "· 전화 상담",
        location: "대전병원 응급실",
        lastModified: "2024-10-10",
        remainingPeriod: "70",
        type: "의료", // type 추가
      },
      {
        category: "정책",
        title: "치료 의료 데이터 관리 개선", // 치료 포함
        method: "· 온라인 신청",
        location: "광주센터",
        lastModified: "2024-07-15",
        remainingPeriod: "15",
        type: "의료", // type 추가
      },
      {
        category: "정책",
        title: "치료 환자 중심 의료 서비스 개선", // 치료 포함
        method: "· 방문 상담",
        location: "인천중앙병원",
        lastModified: "2024-09-05",
        remainingPeriod: "35",
        type: "의료", // type 추가
      },
      {
        category: "정책",
        title: "치료 전국 공공병원 시설 확충", // 치료 포함
        method: "· 이메일 문의",
        location: "전국 주요 병원",
        lastModified: "2024-08-10",
        remainingPeriod: "25",
        type: "의료", // type 추가
      },
    ],
    행사_교육: [
      {
        category: "행사/교육",
        title: "치료 응급처치 워크숍", // 치료 포함
        method: "· 현장 강의",
        location: "서울센터",
        remainingPeriod: "10",
        type: "의료", // type 추가
      },
      {
        category: "행사/교육",
        title: "치료 의료 AI 세미나", // 치료 포함
        location: "부산컨벤션",
        remainingPeriod: "0", // D-Day
        type: "의료", // type 추가
      },
      {
        category: "행사/교육",
        title: "치료 보건 정책 토론회", // 치료 포함
        method: "· 온라인 웨비나",
        location: "대전연구소",
        remainingPeriod: "-1", // 지난 일정
        type: "의료", // type 추가
      },
      {
        category: "행사/교육",
        title: "치료 환자 맞춤형 치료 교육", // 치료 포함
        method: "· 실습 포함",
        location: "광주보건대",
        remainingPeriod: "20",
        type: "의료", // type 추가
      },
      {
        category: "행사/교육",
        title: "치료 감염병 예방 캠페인", // 치료 포함
        method: "· 거리 홍보",
        location: "서울시청 광장",
        remainingPeriod: "5",
        type: "의료", // type 추가
      },
    ],
    일자리: [
      {
        category: "일자리",
        title: "치료 서울병원 간호사 모집", // 치료 포함
        method: "· 이메일 지원",
        location: "서울병원",
        remainingPeriod: "25",
        type: "의료", // type 추가
      },
      {
        category: "일자리",
        title: "치료 부산병원 행정직 채용", // 치료 포함
        method: "· 온라인 지원",
        location: "부산병원",
        remainingPeriod: "0", // D-Day
        type: "의료", // type 추가
      },
      {
        category: "일자리",
        title: "치료 의료기기 엔지니어 채용", // 치료 포함
        method: "· 전화 문의",
        location: "대구센터",
        remainingPeriod: "-1", // 지난 일정
        type: "의료", // type 추가
      },
      {
        category: "일자리",
        title: "치료 응급구조사 신규 채용", // 치료 포함
        method: "· 방문 접수",
        location: "인천응급센터",
        remainingPeriod: "18",
        type: "의료", // type 추가
      },
      {
        category: "일자리",
        title: "치료 전문의 초빙 공고", // 치료 포함
        method: "· 서류 전형",
        location: "대전종합병원",
        remainingPeriod: "12",
        type: "의료", // type 추가
      },
    ],
  },
  수술: {
    정책: [
      {
        category: "정책",
        title: "수술 로봇 수술 지원 확대", // 수술 포함
        method: "· 온라인 신청",
        location: "서울대병원 첨단수술센터",
        lastModified: "2024-09-12",
        remainingPeriod: "40",
        type: "의료", // type 추가
      },
      {
        category: "정책",
        title: "수술 수술 후 재활 지원 정책", // 수술 포함
        method: "· 전화 상담",
        location: "부산재활병원",
        lastModified: "2024-08-25",
        remainingPeriod: "20",
        type: "의료", // type 추가
      },
      {
        category: "정책",
        title: "수술 전문의 배치 기준 강화", // 수술 포함
        method: "· 방문 상담",
        location: "대전종합병원",
        lastModified: "2024-07-30",
        remainingPeriod: "5",
        type: "의료", // type 추가
      },
      {
        category: "정책",
        title: "수술 신규 수술 장비 도입", // 수술 포함
        method: "· 온라인 신청",
        location: "광주첨단센터",
        lastModified: "2024-10-05",
        remainingPeriod: "60",
        type: "의료", // type 추가
      },
      {
        category: "정책",
        title: "수술 수술 후 감염 예방 강화", // 수술 포함
        method: "· 병원 방문",
        location: "서울감염관리센터",
        lastModified: "2024-09-20",
        remainingPeriod: "45",
        type: "의료", // type 추가
      },
    ],
    행사_교육: [
      {
        category: "행사/교육",
        title: "수술 최신 내시경 수술 세미나", // 수술 포함
        method: "· 현장 강의",
        location: "서울컨벤션센터",
        remainingPeriod: "15",
        type: "의료", // type 추가
      },
      {
        category: "행사/교육",
        title: "수술 외과 의사 워크숍", // 수술 포함
        location: "부산메디컬타워",
        remainingPeriod: "0", // D-Day
        type: "의료", // type 추가
      },
      {
        category: "행사/교육",
        title: "수술 수술 감염 예방 교육", // 수술 포함
        method: "· 온라인 웨비나",
        location: "대전국립병원",
        remainingPeriod: "-1", // 지난 일정
        type: "의료", // type 추가
      },
      {
        category: "행사/교육",
        title: "수술 정형외과 혁신 수술법 강연", // 수술 포함
        method: "· 의료진 대상",
        location: "광주의료연구소",
        remainingPeriod: "25",
        type: "의료", // type 추가
      },
    ],
    일자리: [
      {
        category: "일자리",
        title: "수술 서울병원 외과의 채용", // 수술 포함
        method: "· 이메일 지원",
        location: "서울병원",
        remainingPeriod: "30",
        type: "의료", // type 추가
      },
      {
        category: "일자리",
        title: "수술 부산병원 마취과 채용", // 수술 포함
        method: "· 온라인 지원",
        location: "부산병원",
        remainingPeriod: "0", // D-Day
        type: "의료", // type 추가
      },
      {
        category: "일자리",
        title: "수술 수술 장비 엔지니어 채용", // 수술 포함
        method: "· 전화 문의",
        location: "광주첨단의료센터",
        remainingPeriod: "-1", // 지난 일정
        type: "의료", // type 추가
      },
      {
        category: "일자리",
        title: "수술 전문 외과 간호사 모집", // 수술 포함
        method: "· 서류 제출",
        location: "서울대병원",
        remainingPeriod: "28",
        type: "의료", // type 추가
      },
      {
        category: "일자리",
        title: "수술 신규 레지던트 모집", // 수술 포함
        method: "· 온라인 지원",
        location: "부산종합병원",
        remainingPeriod: "14",
        type: "의료", // type 추가
      },
    ],
  },
};

export default dummy;
