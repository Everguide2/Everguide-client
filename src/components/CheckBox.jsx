import {styled} from "styled-components";
import {icInstagram} from "../assets/index.js";
// eslint-disable-next-line react/prop-types
const CheckBox = ({text}) => {
  return (
      <Wrapper htmlFor='cb'>
        <Input id='cb' type="checkbox"/>{text}
      </Wrapper>
  );
};

export default CheckBox;

const Wrapper = styled.label`
  ${({theme}) => theme.fonts.body4}
  display: flex;
  align-items: center;
  box-sizing: border-box;
`
const Input = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 0;
  border: 1px solid ${({ theme }) => theme.colors.gray[600]};
  
  &:checked{
    background-color: ${({ theme }) => theme.colors.primary[600]};
  }
`
