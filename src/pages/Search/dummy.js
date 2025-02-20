const dummy = {
  치료: {
    정책: [
      {
        id: 21,
        category: "정책",
        title: "의료 정책 개편안", // 치료 포함
        method: "· 복지센터 방문 신청",
        location: "서울병원 본관 305호",
        lastModified: "2024-09-30",
        remainingPeriod: "50",
        type: "의료", // type 추가
      },
      {
        id: 22,
        category: "정책",
        title: "치료비 지원 확대 정책", // 치료 포함
        method: "· 온라인 예약",
        location: "부산병원",
        lastModified: "2024-08-20",
        remainingPeriod: "30",
        type: "의료", // type 추가
      },
      {
        id: 23,
        category: "정책",
        title: "치료 약제비 지원 사업", // 치료 포함
        method: "· 병원 및 건강보험공단 방문 신청",
        location: "대전병원",
        lastModified: "2024-10-10",
        remainingPeriod: "70",
        type: "의료", // type 추가
      },
      {
        id: 24,
        category: "정책",
        title: "치료 장비 지원 정책", // 치료 포함
        method: "· 지정 병원 방문 신청",
        location: "광주센터",
        lastModified: "2024-07-15",
        remainingPeriod: "15",
        type: "의료", // type 추가
      },
      {
        id: 25,
        category: "정책",
        title: "환자 중심 의료 서비스 개선", // 치료 포함
        method: "· 온라인 및 방문 신청",
        location: "인천중앙병원",
        lastModified: "2024-09-05",
        remainingPeriod: "35",
        type: "의료", // type 추가
      },
      {
        id: 26,
        category: "정책",
        title: "예방 백신 지원 정책", // 치료 포함
        method: "· 보건소 및 지정 병원 방문 신청",
        location: "전국 보건소",
        lastModified: "2024-08-10",
        remainingPeriod: "25",
        type: "의료", // type 추가
      },
    ],
    행사_교육: [
      {
        id: 21,
        category: "행사/교육",
        title: "응급처치 워크숍", // 치료 포함
        method: "· 현장 강의",
        location: "서울센터",
        remainingPeriod: "10",
        type: "의료", // type 추가
      },
      {
        id: 22,
        category: "행사/교육",
        title: "치료 전문 재활 교육", // 치료 포함
        location: "부산컨벤션",
        remainingPeriod: "0", // D-Day
        type: "의료", // type 추가
      },
      {
        id: 23,
        category: "행사/교육",
        title: "예방 건강 캠페인", // 치료 포함
        method: "· 온라인 웨비나",
        location: "대전연구소",
        remainingPeriod: "-1", // 지난 일정
        type: "의료", // type 추가
      },
      {
        id: 24,
        category: "행사/교육",
        title: "의약품 지원 프로그램", // 치료 포함
        method: "· 실습 포함",
        location: "광주보건대",
        remainingPeriod: "20",
        type: "의료", // type 추가
      },
      {
        id: 25,
        category: "행사/교육",
        title: "응급 구조 훈련", // 치료 포함
        method: "· 거리 홍보",
        location: "서울시청 광장",
        remainingPeriod: "5",
        type: "의료", // type 추가
      },
    ],
    일자리: [
      {
        id: 21,
        category: "일자리",
        title: "간호사",
        method: "· 이메일 지원",
        company: "서울병원",
        location: "서울시 송파구",
        remainingPeriod: "25",
        duration: "2025-02-19 ~ 2025-03-15", // 25일 후
      },
      {
        id: 22,
        category: "일자리",
        title: "물리치료사",
        method: "· 온라인 지원",
        company: "한강병원",
        location: "서울시 강동구",
        remainingPeriod: "0",
        type: "의료",
        duration: "2025-01-19 ~ 2025-02-19", // D-Day
      },
      {
        id: 23,
        category: "일자리",
        title: "응급구조사",
        method: "· 전화 문의",
        company: "강북종합병원",
        location: "서울시 강북구",
        remainingPeriod: "-1",
        duration: "2024-11-27 ~ 2025-02-19", // 지난 일정
      },
      {
        id: 24,
        category: "일자리",
        title: "작업치료사",
        method: "· 방문 접수",
        company: "서울재활병원",
        location: "서울시 마포구",
        remainingPeriod: "18",
        duration: "2025-02-19 ~ 2025-03-09", // 18일 후
      },
      {
        id: 25,
        category: "일자리",
        title: "상담사",
        method: "· 서류 전형",
        company: "푸른정신의학과",
        location: "서울시 서초구",
        remainingPeriod: "12",
        type: "의료",
        duration: "2025-02-19 ~ 2025-03-03", // 12일 후
      },
    ],
  },
  수술: {
    정책: [
      {
        id: 27,
        category: "정책",
        title: "로봇 수술 지원 확대", // 수술 포함
        method: "· 온라인 신청",
        location: "서울대병원 첨단수술센터",
        lastModified: "2024-09-12",
        remainingPeriod: "40",
        type: "의료", // type 추가
      },
      {
        id: 28,
        category: "정책",
        title: "수술 장비 현대화 지원", // 수술 포함
        method: "· 전화 상담",
        location: "보건복지부 의료정책과",
        lastModified: "2024-08-25",
        remainingPeriod: "20",
        type: "의료", // type 추가
      },
      {
        id: 29,
        category: "정책",
        title: "수술 후 회복 지원 프로그램", // 수술 포함
        method: "· 병원 및 보건소 신청",
        location: "전국 보건소 및 협약 병원",
        lastModified: "2024-07-30",
        remainingPeriod: "5",
        type: "의료", // type 추가
      },
      {
        id: 30,
        category: "정책",
        title: "수술비 지원 확대 정책", // 수술 포함
        method: "· 온라인 및 오프라인 신청",
        location: "국민건강보험공단",
        lastModified: "2024-10-05",
        remainingPeriod: "60",
        type: "의료", // type 추가
      },
      {
        id: 31,
        category: "정책",
        title: "수술 후 간병 지원 서비스", // 수술 포함
        method: "· 병원 및 지자체 신청",
        location: "보건소 및 지정 간병센터",
        lastModified: "2024-09-20",
        remainingPeriod: "45",
        type: "의료", // type 추가
      },
    ],
    행사_교육: [
      {
        id: 26,
        category: "행사/교육",
        title: "최신 내시경 수술 세미나", // 수술 포함
        method: "· 현장 강의",
        location: "서울컨벤션센터",
        remainingPeriod: "15",
        type: "의료", // type 추가
      },
      {
        id: 27,
        category: "행사/교육",
        title: "로봇 수술 기술 워크숍", // 수술 포함
        location: "서울대학교병원 교육센터",
        remainingPeriod: "0", // D-Day
        type: "의료", // type 추가
      },
      {
        id: 28,
        category: "행사/교육",
        title: "정형외과 수술 기법 세미나", // 수술 포함
        method: "· 온라인 웨비나",
        location: "대한정형외과학회 교육관",
        remainingPeriod: "-1", // 지난 일정
        type: "의료", // type 추가
      },
      {
        id: 29,
        category: "행사/교육",
        title: "미세 수술 심화 과정", // 수술 포함
        method: "· 의료진 대상",
        location: "국립암센터 수술 교육실",
        remainingPeriod: "25",
        type: "의료", // type 추가
      },
    ],
    일자리: [
      {
        id: 26,
        category: "일자리",
        title: "수술 전문의",
        method: "· 이메일 지원",
        company: "푸른의학과",
        location: "서울시 서초구",
        remainingPeriod: "25",
        duration: "2025-02-19 ~ 2025-03-15", // 25일 후
      },
      {
        id: 27,
        category: "일자리",
        title: "정형외과 전문의",
        method: "· 온라인 지원",
        company: "서울정형외과",
        location: "서울시 강남구",
        remainingPeriod: "0",
        type: "의료",
        duration: "2025-01-01 ~ 2025-02-21", // D-Day
      },
      {
        id: 28,
        category: "일자리",
        title: "성형외과 전문의",
        method: "· 전화 문의",
        company: "하나성형외과",
        location: "서울시 종로구",
        remainingPeriod: "-1",
        duration: "2024-11-27 ~ 2025-02-19", // 지난 일정
      },
      {
        id: 29,
        category: "일자리",
        title: "소아외과 전문의",
        method: "· 방문 접수",
        company: "푸른대학교병원",
        location: "경기도 성남시",
        remainingPeriod: "18",
        duration: "2025-02-19 ~ 2025-03-09", // 18일 후
      },
      {
        id: 30,
        category: "일자리",
        title: "심장외과 전문의",
        method: "· 서류 전형",
        company: "서울심장병원",
        location: "서울시 마포구",
        remainingPeriod: "12",
        type: "의료",
        duration: "2025-02-19 ~ 2025-03-03", // 12일 후
      },
    ],
  },
};

export default dummy;
