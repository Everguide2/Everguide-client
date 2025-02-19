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

// 카드 그리드 스타일 (정책 및 행사 카드)
export const CardGrid = styled.div`
  display: grid;
grid-template-columns: 340px 340px 340px;
grid-template-rows: repeat(2, 256px);

  gap: 46px;
  
  justify-content: center;
`;

// 개별 카드 스타일
export const Card = styled.div`
  background: white;
  border-radius: 26px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  
  text-align: center;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  height : 256px;

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
`;

// 말풍선 스타일
export const SpeechBubble = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  font-size: 16px;
  font-weight: 500;
  color: #555;
  max-width: 250px;
  position: relative;
  text-align: center;

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
    color: #f9a825;
    font-weight: 700;
    cursor: pointer;
  }
`;
export const MascotImage = styled.img`
  width: 100px;
  height: auto;
  margin-left: 10px;
`;

