import styled from 'styled-components';


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
