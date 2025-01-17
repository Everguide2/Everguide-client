import {styled} from "styled-components";
// eslint-disable-next-line react/prop-types
const CheckBox = ({text}) => {
  return (
      <Wrapper>
        <Input type="checkbox"/>
        <Text>{text}</Text>
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
  width: 20px;
  height: 20px;
  border-radius: 3px;
  appearance: none;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.gray[600]};
  accent-color: ${({ theme }) => theme.colors.gray[600]};
  box-sizing: border-box;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[200]};
  }
  &:checked{
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url("data:image/svg+xml,%3Csvg width='15' height='12' viewBox='0 0 15 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 5.21053L5.81482 9L13 1' stroke='white' stroke-width='3'/%3E%3C/svg%3E%0A");
    background-color: ${({ theme }) => theme.colors.gray[600]};
  }
`
const Text = styled.p`
  margin-left: 8px;
`
