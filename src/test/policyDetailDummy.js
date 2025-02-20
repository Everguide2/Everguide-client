export const policydummy = [
  {
    id: 1,
    title: "서울국제노인영화제 단편경쟁 출품공모",
    subTitle:
      "서울국제노인영화제가 단편경쟁 부문 출품작을 모집합니다. 노인을 주제로 한 작품이거나, 만 60세 이상 감독이 연출한 작품이라면 출품 가능하며, 장르와 형식의 제한은 없습니다.",
    bookMark: false,
    category: "복지",
    startDate: "25.01.01",
    endDate: "25.01.15",
    supplyfor: "- 지원대상: 노인을 주제로 한 작품",
    standard: "- 선정기준: 주제 적합성 및 사회적 메세지",
    content: "- 신청접수처: 구청 복지과 - 지급시기: 연중",
    total: "2000",
    age: "60세 이상",
    registration: "- 신청접수처: 구청 복지과 - 지급시기: 연중",
    homepage: "https://example.com/policy1",
  },
  {
    id: 2,
    title: "어르신 복지서비스",
    subTitle: "노인 대상 복지 혜택 모음",
    bookMark: true,
    category: "보건",
    startDate: "25.01.05",
    endDate: "25.01.20",
    supplyfor: "- 지원대상: 부산광역시 거주 어르신",
    standard: "- 선정기준: 70세 이상 기초수급자",
    content: "- 신청접수처: 주민센터 - 지급시기: 연중",
    total: "1500",
    age: "70세 이상",
    registration: "- 신청접수처: 주민센터 - 지급시기: 연중",
    homepage: "https://example.com/policy2",
  },
  {
    id: 3,
    title: "건강관리 지원",
    subTitle: "어르신 건강검진 및 지원 서비스",
    bookMark: false,
    category: "의료",
    startDate: "25.01.10",
    endDate: "25.01.25",
    supplyfor: "- 지원대상: 대구광역시 거주 어르신",
    standard: "- 선정기준: 65세 이상 무료 검진 대상자",
    content: "- 신청접수처: 보건소 - 지급시기: 연중",
    total: "3000",
    age: "65세 이상",
    registration: "- 신청접수처: 보건소 - 지급시기: 연중",
    homepage: "https://example.com/policy2",
  },
  {
    id: 4,
    title: "중소기업 지원 정책",
    subTitle: "중소기업을 위한 정부 지원 혜택",
    bookMark: false,
    category: "경제",
    startDate: "25.01.01",
    endDate: "25.12.31",
    supplyfor: "- 지원대상 : 중소기업 및 소상공인",
    standard: "- 선정기준 : 연매출 10억 이하 사업자",
    content:
      "- 신청접수처 : 중소기업청 및 온라인 신청 - 지급시기 : 신청 후 3개월 이내",
    total: "2000",
    age: "사업자 대상",
    registration: "- 신청접수처 : 중소기업청 및 온라인 신청",
    homepage: "https://example.com/policy2",
  },
  {
    id: 5,
    title: "장애인 생활 지원 정책",
    subTitle: "장애인을 위한 맞춤형 생활 지원 정책",
    bookMark: false,
    category: "복지",
    startDate: "25.02.15",
    endDate: "25.12.31",
    supplyfor: "- 지원대상 : 등록 장애인",
    standard: "- 선정기준 : 장애등급 1~3급 해당자",
    content:
      "- 신청접수처 : 복지센터 및 읍면동사무소 - 지급시기 : 연중 신청 가능",
    total: "2500",
    age: "전 연령",
    registration: "- 신청접수처 : 복지센터 및 읍면동사무소",
    homepage: "https://example.com/sspolicy2",
  },

  // 지원정책 ("치료") 관련 키워드 6개
  {
    id: 21,
    title: "치료 의료 정책 개편안",
    subTitle: "장애인을 위한 맞춤형 치료 지원 정책",
    bookMark: false,
    category: "복지",
    startDate: "24.05.30",
    endDate: "25.04.12",
    method: "· 복지센터 방문 신청",
    supplyfor: "- 지원대상 : 등록 장애인 및 희귀난치병 환자",
    standard:
      "- 선정기준 : 장애등급 1~3급 해당자 및 소득 기준 중위소득 120% 이하",
    content:
      "- 신청접수처 : 서울병원 본관 305호\n- 지원 내용 : 재활 치료비, 보조기기 구매비, 맞춤형 건강관리 서비스 제공",
    total: 5000,
    age: "전 연령",
    registration: "- 신청접수처 : 서울병원 본관 305호",
    homepage: {
      list1: "https://www.bokjiro.go.kr/medical-support",
      list2: "https://www.bokjiro.go.kr/rehabilitation",
    },
  },
  {
    id: 22,
    title: "치료비 지원 확대 정책",
    subTitle: "저소득층을 위한 치료비 지원 확대",
    bookMark: true,
    category: "의료",
    startDate: "24.05.30",
    endDate: "25.03.23",
    method: "· 온라인 예약",
    supplyfor: "- 지원대상 : 기초생활수급자 및 차상위계층",
    standard: "- 선정기준 : 중위소득 100% 이하 가구",
    content:
      "- 신청접수처 : 부산병원\n- 지원 내용 : 입원비 및 외래진료비 본인 부담금 지원",
    total: 3000,
    age: "전 연령",
    registration: "- 신청접수처 : 부산병원",
    homepage: {
      list1: "https://www.bokjiro.go.kr/treatment-support",
      list2: "https://www.bokjiro.go.kr/hospital-aid",
    },
  },
  {
    id: 23,
    title: "치료 약제비 지원 사업",
    subTitle: "희귀·난치성 질환자 약제비 지원",
    bookMark: false,
    category: "건강",
    startDate: "24.07.10",
    endDate: "25.05.02",
    method: "· 병원 및 건강보험공단 방문 신청",
    supplyfor: "- 지원대상 : 희귀·난치성 질환을 가진 환자",
    standard: "- 선정기준 : 질병관리청이 지정한 희귀질환 보유자",
    content:
      "- 신청접수처 : 대전병원\n- 지원 내용 : 비급여 약제비 및 필수 치료제 지원",
    total: 4500,
    age: "전 연령",
    registration: "- 신청접수처 : 대전병원",
    homepage: {
      list1: "https://www.bokjiro.go.kr/rare-disease",
      list2: "https://www.bokjiro.go.kr/medicine-support",
    },
  },
  {
    id: 24,
    title: "치료 장비 지원 정책",
    subTitle: "재활 치료 장비 지원 확대",
    bookMark: false,
    category: "복지",
    startDate: "24.12.15",
    endDate: "25.03.08",
    method: "· 지정 병원 방문 신청",
    supplyfor: "- 지원대상 : 장애인 및 재활 치료가 필요한 환자",
    standard: "- 선정기준 : 장애등급 1~4급 해당자 및 재활 처방을 받은 환자",
    content:
      "- 신청접수처 : 광주센터\n- 지원 내용 : 휠체어, 보청기, 재활운동 기구 등 지원",
    total: 3500,
    age: "전 연령",
    registration: "- 신청접수처 : 광주센터",
    homepage: {
      list1: "https://www.bokjiro.go.kr/rehabilitation-aid",
      list2: "https://www.bokjiro.go.kr/equipment-support",
    },
  },
  {
    id: 25,
    title: "치료 환자 중심 의료 서비스 개선",
    subTitle: "조기 치료를 위한 무료 건강검진 지원",
    bookMark: true,
    category: "건강",
    startDate: "24.06.18",
    endDate: "25.03.28",
    method: "· 온라인 및 방문 신청",
    supplyfor: "- 지원대상 : 저소득층 및 취약계층",
    standard: "- 선정기준 : 건강보험료 하위 30% 이하 가구",
    content:
      "- 신청접수처 : 인천중앙병원\n- 지원 내용 : 무료 건강검진 및 정밀검사 비용 지원",
    total: 4000,
    age: "전 연령",
    registration: "- 신청접수처 : 인천중앙병원",
    homepage: {
      list1: "https://www.bokjiro.go.kr/free-checkup",
      list2: "https://www.bokjiro.go.kr/early-treatment",
    },
  },
  {
    id: 26,
    title: "치료 예방 백신 지원 정책",
    subTitle: "취약계층 대상 예방 접종 무료 지원",
    bookMark: false,
    category: "보건",
    startDate: "24.03.29",
    endDate: "25.03.17",
    method: "· 보건소 및 지정 병원 방문 신청",
    supplyfor: "- 지원대상 : 영유아, 노인 및 면역 취약계층",
    standard: "- 선정기준 : 국가필수예방접종 대상자",
    content:
      "- 신청접수처 : 전국 보건소 및 지정 의료기관\n- 지원 내용 : 독감, 폐렴, A형간염 등 예방접종 무료 제공",
    total: 3200,
    age: "전 연령",
    registration: "- 신청접수처 : 전국 보건소 및 지정 의료기관",
    homepage: {
      list1: "https://www.bokjiro.go.kr/vaccine-support",
      list2: "https://www.bokjiro.go.kr/immunization",
    },
  },
  // 지원정책 ("수술") 관련 키워드 5개
  {
    id: 27,
    title: "수술 로봇 수술 지원 확대",
    subTitle: "취약계층 대상 수술 로봇 무료 지원",
    bookMark: false,
    category: "보건",
    startDate: "24.08.01",
    endDate: "25.04.02",
    method: "· 온라인 신청",
    supplyfor: "- 지원대상 : 영유아, 노인 및 면역 취약계층",
    standard: "- 선정기준 : 국가필수예방접종 대상자",
    content:
      "- 신청접수처 : 서울대병원 첨단수술센터\n- 지원 내용 : 독감, 폐렴, A형간염 등 예방접종 무료 제공",
    total: 3200,
    age: "전 연령",
    registration: "- 신청접수처 : 서울대병원 첨단수술센터",
    homepage: {
      list1: "https://www.bokjiro.go.kr/vaccine-support",
      list2: "https://www.bokjiro.go.kr/immunization",
    },
  },
  {
    id: 28,
    title: "수술 장비 현대화 지원",
    subTitle: "최신 수술 장비 도입을 위한 병원 지원 확대",
    bookMark: true,
    category: "의료",
    startDate: "24.09.01",
    endDate: "25.03.13",
    method: "· 전화 상담",
    supplyfor: "- 지원대상 : 전국 종합병원 및 대학병원",
    standard: "- 선정기준 : 국공립 의료기관 및 지정 병원",
    content:
      "- 신청접수처 : 보건복지부 의료정책과\n- 지원 내용 : 로봇 수술 장비 및 첨단 의료기기 도입 비용 지원",
    total: 5000,
    age: "해당 없음",
    registration: "- 신청접수처 : 보건복지부 의료정책과",
    homepage: {
      list1: "https://www.bokjiro.go.kr/medical-equipment",
      list2: "https://www.bokjiro.go.kr/hospital-support",
    },
  },
  {
    id: 29,
    title: "수술 후 회복 지원 프로그램",
    subTitle: "수술 후 환자의 빠른 회복을 위한 지원 정책",
    bookMark: false,
    category: "재활",
    startDate: "24.10.01",
    endDate: "25.02.26",
    method: "· 병원 및 보건소 신청",
    supplyfor: "- 지원대상 : 수술 후 재활 치료가 필요한 환자",
    standard: "- 선정기준 : 의료진 소견서 제출자",
    content:
      "- 신청접수처 : 전국 보건소 및 협약 병원\n- 지원 내용 : 입원 재활 치료 및 재활 운동 프로그램 제공",
    total: 2800,
    age: "전 연령",
    registration: "- 신청접수처 : 전국 보건소 및 협약 병원",
    homepage: {
      list1: "https://www.bokjiro.go.kr/recovery-support",
      list2: "https://www.bokjiro.go.kr/post-surgery",
    },
  },
  {
    id: 30,
    title: "수술비 지원 확대 정책",
    subTitle: "경제적 어려움을 겪는 환자 대상 수술비 지원",
    bookMark: true,
    category: "복지",
    startDate: "24.11.01",
    endDate: "25.04.22",
    method: "· 온라인 및 오프라인 신청",
    supplyfor: "- 지원대상 : 기초생활수급자 및 차상위계층",
    standard: "- 선정기준 : 가구소득 중위 80% 이하",
    content:
      "- 신청접수처 : 국민건강보험공단 및 보건소\n- 지원 내용 : 수술비 본인 부담금 50~100% 지원",
    total: 6000,
    age: "전 연령",
    registration: "- 신청접수처 : 국민건강보험공단 및 보건소",
    homepage: {
      list1: "https://www.bokjiro.go.kr/surgery-cost",
      list2: "https://www.bokjiro.go.kr/low-income-aid",
    },
  },
  {
    id: 31,
    title: "수술 후 간병 지원 서비스",
    subTitle: "고령 환자 및 중증 환자를 위한 간병 서비스 지원",
    bookMark: false,
    category: "돌봄",
    startDate: "24.12.01",
    endDate: "25.04.07",
    method: "· 병원 및 지자체 신청",
    supplyfor: "- 지원대상 : 장기 입원 환자 및 거동이 불편한 환자",
    standard: "- 선정기준 : 의료기관 소견서 제출자",
    content:
      "- 신청접수처 : 보건소 및 지정 간병센터\n- 지원 내용 : 간병인 서비스 및 생활 보조 서비스 제공",
    total: 3500,
    age: "전 연령",
    registration: "- 신청접수처 : 보건소 및 지정 간병센터",
    homepage: {
      list1: "https://www.bokjiro.go.kr/care-service",
      list2: "https://www.bokjiro.go.kr/hospital-care",
    },
  },
];
