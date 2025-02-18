import {styled} from "styled-components";

// eslint-disable-next-line react/prop-types
const Category = ({text, type ,isJob}) => {
  return (
        <Container type={type} $isJob={isJob}>
          {text}
        </Container>
  );
};

export default Category;

const Container = styled.p`
    color: ${({theme, $isJob}) => $isJob ? theme.colors.realWhite : theme.colors.realBlack};
  box-sizing: border-box;
  border-radius: 33px;
  background-color: ${({theme, $isJob}) => $isJob? theme.colors.primary[500]: theme.colors.gray[100]};
  ${({theme, $isJob}) => $isJob ? theme.fonts.caption1 : theme.fonts.caption4};
  margin: ${({type}) => type === "card" ? '0' : '0 12px'};
  padding: ${({type, $isJob}) => type === "card" ? '1px 12px' : $isJob ? '5px':'0'};
  position: ${({type}) => type === "card" ? 'absolute' : ''};
  top: ${({type}) => type === "card" ? '15px' : ''};
  left: ${({type}) => type === "card" ? '17px' : ''};
`