import {styled} from "styled-components";

// eslint-disable-next-line react/prop-types
const SmallButton = ({image, onClick}) => {
  return (
      <Container onClick={onClick}>
        <img src={image}/>
      </Container>
  );
};

export default SmallButton;

const Container = styled.button`
  width: 36px;
  height: 36px;
  background-color: ${({theme}) => theme.colors.realWhite};
  border-radius: 7px;
  border: 1px solid ${({theme}) => theme.colors.gray[300]};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`