const string = {
  findPolicy: "정책찾기",
  supportPolicy: "지원정책",
  eventEducation: "행사/교육",
  workInformation: "일자리 정보",
  LoginRegister: "로그인/회원가입",

  searchBarPlaceHolder : "찾고 싶은 정책을 입력해보세요!",

  footerIntroduction: "Team Everguide 소개",
  csTitle: "고객센터",
  phoneNumber: "01099132342",
  emailTitle: "메일",
  email: "Hsu235@Gmail.Com",
  businessTitle: "사업자번호",
  number: "011-001-122",

  usePolicy: "이용약관",
  usePersonalInfo: "개인정보처리방침",
  ask: "문의하기",

  copyRight: "@ 2025 Everguide. All rights reserved.",

  login: {
    title: "로그인",
    description: "계정에 로그인하고 나에게 딱맞는 복지혜택과 정책을 챙겨가요",
    links: [
      {
        description: "계정이 기억나지 않으신가요?",
        items: [
          { text: "이메일 찾기", href: "/find-email" },
          { text: "비밀번호 찾기", href: "/find-password" },
        ],
      },
      {
        description: "아직 계정이 없으신가요?",
        items: [
          { text: "회원가입", href: "/signup" },
        ],
      },
    ],
  },

  signup: {
    title: "회원가입",
    description: "새로운 계정을 생성하고 나에게 딱맞는 복지혜택과 정책을 챙겨가요",
    links: [
      {
        description: "이미 계정이 있으신가요?",
        items: [
          { text: "로그인", href: "/login" },
        ],
      },
    ],
  },
  
  findEmail: {
    title: "이메일 찾기",
    description: "이메일이 기억나지 않으시나요?",
    links: [
      {
        description: "계정이 기억나시나요?",
        items: [
          { 
            text: "로그인",
            href: "/login",
          },
        ],
      },
      {
        description: "아직 계정이 없으신가요?",
        items: [
          { 
            text: "회원가입",
            href: "/signup" 
          },
        ]
      },
    ],
  },

  findPassword: {
    title: "비밀번호 찾기",
    description: "비밀번호가 기억나지 않으시나요?",
    links: [
      {
        description: "계정이 기억나시나요?",
        items: [
          { 
            text: "로그인",
            href: "/login",
          },
        ],
      },
      {
        description: "아직 계정이 없으신가요?",
        items: [
          { 
            text: "회원가입",
            href: "/signup" 
          },
        ]
      },
    ]
  }

}

export default string;
