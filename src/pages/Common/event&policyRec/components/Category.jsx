import {styled} from "styled-components";

// eslint-disable-next-line react/prop-types
const Category = ({text, type}) => {
  return (
        <Container type={type}>
          {text}
        </Container>
  );
};

export default Category;

const Container = styled.p`
  box-sizing: border-box;
  border-radius: 33px;
  background-color: ${({theme}) => theme.colors.gray[100]};
  ${({theme}) => theme.fonts.caption4};
  margin: ${({type}) => type === "card" ? '0' : '0 12px'};
  padding: ${({type}) => type === "card" ? '1px 12px' : '0'};
  position: ${({type}) => type === "card" ? 'absolute' : ''};
  top: ${({type}) => type === "card" ? '15px' : ''};
  left: ${({type}) => type === "card" ? '17px' : ''};
`