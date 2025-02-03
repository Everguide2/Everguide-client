import {styled} from "styled-components";
import {icRight, icLeft} from "@assets/index.js";

// eslint-disable-next-line react/prop-types
const PagingButton = ({direction}) => {
  return (
      <Container>
        <img  src={direction === "right" ? icRight : icLeft} alt="Pagination Right icon"/>
      </Container>
  );
};

export default PagingButton;

const Container = styled.div`
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img{
    width: 10px;
    height: 10px;
  }
`