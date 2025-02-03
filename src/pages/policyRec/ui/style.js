import styled from 'styled-components';

export const BoxContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.realWhite};
  border-radius: 42px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width : 907px;
  height : 873px;
  margin: 0 auto;
`;


export const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

export const Title = styled.h1`
${({theme}) => theme.fonts.header0}
  margin-bottom: 32px;
  font-size : 44px;
  color : ${({theme}) => theme.colors.gray[900]};
`;

export const Description = styled.p`
${({theme}) => theme.fonts.header0}
  margin-bottom: 32px;
  line-height: 160%;
  font-size : 28px;
  color : ${({theme}) => theme.colors.gray[700]};

  span {
      color : ${({theme}) => theme.colors.primary[500]};
  }
`;

export const TimeInfo = styled.p`
  font-size: 24px;
  color : ${({theme}) => theme.colors.gray[700]};
  margin-bottom: 32px;
  ${({theme}) => theme.fonts.subheader1}
  strong {
    font-weight: bold;
  }
`;

export const ImageWrapper = styled.div`
  margin-bottom: 32px;
`;

export const StyledImage = styled.img`
  width: 324px;
  height : 319.65px;
`;

export const Button = styled.button`
  width : 480px;
  height : 80px;
  color : white;
  background-color : ${({theme}) => theme.colors.primary[500]};
  ${({theme}) => theme.fonts.header4}
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f9a825;
  }
`;

/* 옵션 버튼을 감싸는 컨테이너 */
export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding : 0 0 80px 0;
  width : 503px;
  margin : 0 auto;

  &.grid-layout {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
`;

/* 옵션 버튼 스타일 */
export const OptionButton = styled.button`
  width: 100%;
  height: 75px;
  background-color: ${({ theme }) => theme.colors.realWhite};
  color: ${({ theme }) => theme.colors.gray[600]};
  border: 2px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 29px;
  cursor: pointer;
  margin: 0 auto;
  ${({theme}) => theme.fonts.subHeader3}
  
  &.selected {
    background-color: ${({ theme }) => theme.colors.primary[50]};
    color: ${({ theme }) => theme.colors.primary[500]};
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }
`;

/* 다음 버튼 스타일 */
export const NextButton = styled.button`
  width: 301px;
  height: 81px;
  color: white;
  background-color: ${({ theme }) => theme.colors.primary[500]};
  ${({ theme }) => theme.fonts.header5}
  border: none;
  border-radius: 28px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #f9a825;
  }

  /* 비활성화 상태 */
  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[200]};
    color: ${({ theme }) => theme.colors.gray[300]};
    cursor: not-allowed;
  }
`;

export const QuestionContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.realWhite};
  border-radius: 41px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 48px 80px 60px 80px;
  width : 905px;
  height : auto;
  margin: 0 auto;

  ${Title} {
    color : ${({theme})=> theme.colors.primary[500]};
    ${({theme}) => theme.fonts.header0}
  }

  ${Description}{
    color: ${({ theme }) => theme.colors.gray[900]};
    ${({theme}) => theme.fonts.header4}
    padding : 0 0 56px 0;
  }
`;