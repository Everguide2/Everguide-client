import {styled} from "styled-components";
import {string} from "@constants/index.js";

const LastDay = () => {
  return (
      <Container>
        <p>{string.lastDay}</p>
      </Container>
  );
};

export default LastDay;

const Container = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-left: 105px solid transparent; 
  border-bottom: 72px solid ${({theme}) => theme.colors.secondary[500]};;
  border-radius: 0 0 26px 0;
  
  p{
    ${({theme}) => theme.fonts.body3};
    color: ${({theme}) => theme.colors.white};
    position: absolute;
    top: 40px; /* 텍스트 위치 조정 */
    left: -60px;
  }
`