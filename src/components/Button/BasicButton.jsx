import {styled} from "styled-components";

// eslint-disable-next-line react/prop-types
const BasicButton = ({text}) => {
  return (
      <StyledButton>
        {text}
      </StyledButton>
  );
};

export default BasicButton;

const StyledButton = styled.button`
    ${({theme}) => theme.fonts.subHeader5};
    width: 100%;
    height: 53px;
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.primary[500]};
    border-radius: 12px;
    border: none;
`