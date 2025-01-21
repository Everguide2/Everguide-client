import {styled} from "styled-components";

// eslint-disable-next-line react/prop-types
const LargeButton = ({text, type, onClick}) => {
  return (
      <Container type={type} onClick={onClick}>
        {text}
      </Container>
  );
};

export default LargeButton;

const Container = styled.button`
  ${({ theme }) => theme.fonts.subHeader3};
  color: ${({ theme, type }) => type === "border" ?  theme.colors.gray[500] : theme.colors.realWhite};
  background: ${({ theme, type }) => type === "border" ?  theme.colors.realWhite : `linear-gradient(45deg, #E75058,#ED6942)`};
  border: 1px solid ${({ theme, type }) => type === "border" ? theme.colors.gray[600] : theme.colors.realWhite};
  outline: none;
  box-shadow: ${({ type }) => type === "border" ?  '' : `4px 4px 24.4px rgba(231, 80, 88, 0.4), -5px -2px 15.9px rgba(255, 217, 123, 0.2)`};;
  box-sizing: border-box;
  padding: 12px 42px;
  border-radius: 16px;
  cursor: pointer;
`