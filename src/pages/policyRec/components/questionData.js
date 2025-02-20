export const questionData = [
  // 🚀 [1] 첫 번째 질문: 정책 대상 선택
  {
    id: "start",
    question: "누구를 위해 정책을 찾고 계신가요?",
    options: [
      { text: "나를 위한 정책", nextId: "location" },
      { text: "부모님/가족을 위한 정책", nextId: "familyLocation" },
      { text: "내가 담당하는 어르신을 위한 정책", nextId: "familyLocation" },
    ],
  },

  // 🚀 [2] 본인 정책 관련 질문 (10개)
  {
    id: "location",
    question: "현재 거주지역은 어디인가요?",
    options: [
      { text: "서울", nextId: "needs" },
      { text: "경기도", nextId: "needs" },
      { text: "인천", nextId: "needs" },
      { text: "부산", nextId: "needs" },
      { text: "충청북도", nextId: "needs" },
      { text: "충청남도", nextId: "needs" },
      { text: "전라북도", nextId: "needs" },
      { text: "전라남도", nextId: "needs" },
      { text: "경상북도", nextId: "needs" },
      { text: "경상남도", nextId: "needs" },
      { text: "강원도", nextId: "needs" },
      { text: "제주도", nextId: "needs" },
    ],
  },
  {
    id: "needs",
    question: "현재 필요한 지원은 무엇인가요?",
    options: [
      { text: "신체건강", nextId: "familySituation" },
      { text: "정신건강", nextId: "familySituation" },
      { text: "생활지원", nextId: "familySituation" },
      { text: "주거", nextId: "familySituation" },
      { text: "일자리", nextId: "familySituation" },
      { text: "문화·여가", nextId: "familySituation" },
      { text: "안전·위기", nextId: "familySituation" },
      { text: "임신·출산", nextId: "familySituation" },
      { text: "보육", nextId: "familySituation" },
      { text: "교육", nextId: "familySituation" },
      { text: "입양·위착", nextId: "familySituation" },
      { text: "보호·돌봄", nextId: "familySituation" },
      { text: "서민금융", nextId: "familySituation" },
      { text: "법률", nextId: "familySituation" },
    ],
  },
  {
    id: "familySituation",
    question: "현재 어떤 가구 상황에 해당되시나요?",
    options: [
      { text: "다문화·탈북민", nextId: "disability" },
      { text: "다자녀", nextId: "disability" },
      { text: "보훈대상자", nextId: "disability" },
      { text: "장애인", nextId: "disability" },
      { text: "저소득", nextId: "disability" },
      { text: "한부모·조손", nextId: "disability" },
      { text: "해당 없음", nextId: "disability" },
    ],
  },
  {
    id: "disability",
    question: "만약 장애가 있으시다면, 장애 정도는 어떤가요?",
    options: [
      { text: "장애 미해당", nextId: "livingStatus" },
      { text: "심한 장애", nextId: "livingStatus" },
      { text: "심하지 않은 장애", nextId: "livingStatus" },
      { text: "결정보류", nextId: "livingStatus" },
      { text: "확인불가", nextId: "livingStatus" },
    ],
  },
  {
    id: "livingStatus",
    question: "현재 혼자 생활 중인가요?",
    options: [
      { text: "예, 혼자 생활 중입니다.", nextId: "distance" },
      { text: "아니요, 가족과 함께 생활 중입니다.", nextId: "distance" },
    ],
  },
  {
    id: "distance",
    question:"자녀와의 거리는 얼마나 떨어져 있나요?",
    options:[
      {text:"같은 집에서 생활 중입니다.", nextId:"income"},
      {text:"같은 지역에 살고 있습니다.", nextId:"income"},
      {text:"다른 지역에 살고 있습니다.", nextId:"income"},
    ],
  },
  {
    id: "income",
    question: "현재 수입 또는 지원을 받고 계신가요?",
    options: [
      { text: "국민연금 수령 중", nextId: "supportCheck" },
      { text: "기초연금 수령 중", nextId: "supportCheck" },
      { text: "기타 복지 혜택 수령 중", nextId: "supportCheck" },
      { text: "지원 없음", nextId: "supportCheck" },
    ],
  },
  {
    id: "supportCheck",
    question: "기초생활수급자 또는 차상위계층에 해당되시나요?",
    options: [
      { text: "예, 기초생활수급자 입니다", nextId: "device" },
      { text: "예, 차상위계층입니다", nextId: "device" },
      { text: "예, 둘 다 해당됩니다", nextId: "device" },
      { text: "아니요, 해당되지 않습니다", nextId: "device" },
    ],
  },
  {
    id: "device",
    question: "가장 자주 사용하는 전자 기기는 무엇인가요?",
    options: [
      { text: "스마트폰", nextId: null },
      { text: "태블릿", nextId: null },
      { text: "컴퓨터/노트북", nextId: null },
      { text: "사용하지 않음", nextId: null },
    ],
  },

  // 🚀 [3] 가족(어르신) 정책 관련 질문 (10개)
  {
    id: "familyLocation",
    question: "부양하거나 돕고 있는 어르신은 현재 어느 지역에 거주하시나요?",
    options: [
      { text: "서울", nextId: "familyNeeds" },
      { text: "경기도", nextId: "familyNeeds" },
      { text: "인천", nextId: "familyNeeds" },
      { text: "부산", nextId: "familyNeeds" },
      { text: "충청북도", nextId: "familyNeeds" },
      { text: "충청남도", nextId: "familyNeeds" },
      { text: "전라북도", nextId: "familyNeeds" },
      { text: "전라남도", nextId: "familyNeeds" },
      { text: "경상북도", nextId: "familyNeeds" },
      { text: "경상남도", nextId: "familyNeeds" },
      { text: "강원도", nextId: "familyNeeds" },
      { text: "제주도", nextId: "familyNeeds" },
    ],
  },
  {
    id: "familyNeeds",
    question: "어르신께 현재 필요한 지원은 무엇인가요?",
    options: [
      { text: "신체건강", nextId: "familySituation" },
      { text: "정신건강", nextId: "familySituation" },
      { text: "생활지원", nextId: "familySituation" },
      { text: "주거", nextId: "familySituation" },
      { text: "일자리", nextId: "familySituation" },
      { text: "문화·여가", nextId: "familySituation" },
      { text: "안전·위기", nextId: "familySituation" },
      { text: "임신·출산", nextId: "familySituation" },
      { text: "보육", nextId: "familySituation" },
      { text: "교육", nextId: "familySituation" },
      { text: "입양·위착", nextId: "familySituation" },
      { text: "보호·돌봄", nextId: "familySituation" },
      { text: "서민금융", nextId: "familySituation" },
      { text: "법률", nextId: "familySituation" },
    ],
  },
  {
    id: "familySituation",
    question: "어르신께서 현재 어떤 가구에 해당 되시나요?",
    options: [
      { text: "다문화·탈북민", nextId: "familyDisability" },
      { text: "다자녀", nextId: "familyDisability" },
      { text: "보훈대상자", nextId: "familyDisability" },
      { text: "장애인", nextId: "familyDisability" },
      { text: "저소득", nextId: "familyDisability" },
      { text: "한부모·조손", nextId: "familyDisability" },
      { text: "해당 없음", nextId: "familyDisability" },
    ],
  },
  {
    id: "familyDisability",
    question: "만약 장애가 있으시다면, 어르신의 장애 정도는 어떤가요?",
    options: [
      { text: "장애 미해당", nextId: "familyLivingStatus" },
      { text: "심한 장애", nextId: "familyLivingStatus" },
      { text: "심하지 않은 장애", nextId: "familyLivingStatus" },
      { text: "결정보류", nextId: "familyLivingStatus" },
      { text: "확인불가", nextId: "familyLivingStatus" },
    ],
  },
  {
    id: "familyLivingStatus",
    question: "어르신께서 혼자 생활하고 계신가요?",
    options: [
      { text: "예, 혼자 생활 중입니다.", nextId: "familyDistance" },
      { text: "아니요, 가족과 함께 생활 중입니다.", nextId: "familyDistance" },
    ],
  },
  {
    id: "familyDistance",
    question:"어르신과 가장 가까운 가족(또는 부양자)은 어느 정도 떨어져 계신가요요?",
    options:[
      {text:"같은 집에서 생활 중입니다.",nextId:"familyIncome"},
      {text:"같은 지역에 살고 있습니다.",nextId:"familyIncome"},
      {text:"다른 지역에 살고 있습니다.",nextId:"familyIncome"},
    ],
  },
  {
    id: "familyIncome",
    question: "어르신께서 현재 수입 또는 지원을 받고 계신가요?",
    options: [
      { text: "국민연금 수령 중", nextId: "familySupportCheck" },
      { text: "기초연금 수령 중", nextId: "familySupportCheck" },
      { text: "기타 복지 혜택 수령 중", nextId: "familySupportCheck" },
      { text: "지원 없음", nextId: "familySupportCheck" },
    ],
  },
  {
    id: "familySupportCheck",
    question: "기초생활수급자 또는 차상위계층에 해당되시나요?",
    options: [
      { text: "예, 기초생활수급자 입니다", nextId: "familyDevice" },
      { text: "예, 차상위계층입니다", nextId: "familyDevice" },
      { text: "예, 둘 다 해당됩니다", nextId: "familyDevice" },
      { text: "아니요, 해당되지 않습니다", nextId: "familyDevice" },
    ],
  },
  {
    id: "familyDevice",
    question: "어르신께서 가장 자주 사용하는 전자 기기는 무엇인가요?",
    options: [
      { text: "스마트폰", nextId: null },
      { text: "태블릿", nextId: null },
      { text: "컴퓨터/노트북", nextId: null },
      { text: "사용하지 않음", nextId: null },
    ],
  },
];
