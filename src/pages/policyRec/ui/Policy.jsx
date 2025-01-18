import React from 'react';
import { imgDangguMag } from '../../../assets';
import { 
    Container, 
    Title, 
    Description, 
    TimeInfo, 
    ImageWrapper, 
    StyledImage, 
    Button,
    BoxContainer
  } from './style';


const Policy = () => {
  return (
    <Container>
        <BoxContainer>
            <Title>나의 숨겨진 복지 혜택 찾기</Title>
            <Description>
                나에게 딱 맞는 복지정책이 있는지 찾아줍니다! <br />
                <span>찾아보기</span>를 클릭해주세요.
            </Description>
            <TimeInfo>
                예상 소요 시간 <strong>40초</strong>
            </TimeInfo>
            <ImageWrapper>
                <StyledImage src={imgDangguMag} alt="강아지 이미지" />
            </ImageWrapper>
            <Button onClick={() => alert('혜택 찾기 시작!')}>찾아보기</Button>
        </BoxContainer>
    </Container>
  );
};

export default Policy;
