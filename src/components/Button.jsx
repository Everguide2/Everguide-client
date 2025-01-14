import { styled } from "styled-components";

// eslint-disable-next-line react/prop-types
const Button = ({text, onClick}) => {
  return (
      <Container onClick={onClick}>
        {text}
      </Container>
  );
};

export default Button;

const Container = styled.button`
  ${({theme}) => theme.fonts.subHeader5};
  color: ${({ theme }) => theme.colors.white};
  padding: 11.5px 24px;
  border: none;
  border-radius: 100px;
  background: ${({theme}) => theme.colors.primary[500]};
`