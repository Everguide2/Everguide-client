import styled from "styled-components";

// 전체 페이지 컨테이너
export const Container = styled.div`
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 제목 스타일
export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary[900]};
  ${({ theme }) => theme.fonts.header0}
  margin-bottom: 20px;
  text-align: center;
`;

// 섹션 컨테이너
export const Section = styled.div`

  margin-bottom: 58px;
`;

export const CardGrid = styled.div`
  display: grid;
grid-template-columns: 340px 340px 340px;
grid-template-rows: repeat(2, 256px);

  gap: 46px;
  
  justify-content: center;
`;

export const PolicyCard = styled.div`
  background: white;
  border-radius: 26px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  height: 256px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-size: 18px;
    ${({ theme }) => theme.fonts.body1}
    color: ${({ theme }) => theme.colors.gray[900]};
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    ${({ theme }) => theme.fonts.caption1}
    color: ${({ theme }) => theme.colors.gray[500]};
    margin-bottom: 8px;
  }

  span {
    font-size: 12px;
    ${({ theme }) => theme.fonts.body1}
    color: ${({ theme }) => theme.colors.secondary[500]};
  }
`;

export const EventCard = styled.div`
  background: white;
  border-radius: 26px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  height: 282px;
  width: 340px;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  }

  /* 상단 이미지 */
  .event-image {
    width: 100%;
    height: 178px;
    object-fit: cover;
    border-radius: 26px 26px 0 0;
  }

  /* 카테고리 태그 (항상 보이도록 수정) */
  .category-tag {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: ${({ theme }) => theme.colors.primary[500]};
    color: white;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: bold;
    ${({ theme }) => theme.fonts.caption3}
    opacity: 1;  /* 항상 보이도록 설정 */
    visibility: visible;
  }

  /* 제목 */
  h3 {
    font-size: 18px;
    ${({ theme }) => theme.fonts.subheader1}
    color: ${({ theme }) => theme.colors.gray[900]};
    margin: 8px 10px;
    font-weight: bold;
  }

  /* 기관 */
  .assign {
  position:absolute;
  bottom:10px;
  left:2px;
    ${({ theme }) => theme.fonts.caption1}
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray[700]};
    margin-left: 10px;
    font-weight: 500;
  }

  /* D-Day (항상 보이도록 설정) */
  .d-day {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.secondary[500]};
    font-weight: bold;
    opacity: 1;  /* 항상 보이도록 설정 */
    visibility: visible;
  }
`;


// 버튼 스타일
export const Button = styled.button`
  background-color: #f9a825;
  color: white;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #f57f17;
  }
`;

export const Mascot = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 50px;
  width: 100%;
  position: relative;
  margin-top : 40px;

  padding-right : 50px;
`;

// 말풍선 스타일
export const SpeechBubble = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px 25px;
  display : inline-block
  font-size: 16px;
  font-weight: 500;
  color : ${({theme}) => theme.colors.gray[700]};
  
  position: relative;
  text-align: center;
  ${({theme}) => theme.fonts.header6}

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    right: 30px; 
    border-width: 10px;
    border-style: solid;
    border-color: white transparent transparent transparent;
  }

  span {
    color : ${({theme}) => theme.colors.primary[500]};
    ${({theme}) => theme.fonts.header3}
    font-weight: 700;
    cursor: pointer;
  }
`;
export const MascotImage = styled.img`
  width: 214px;
  height: 211px;
  margin-left: 10px;
`;

