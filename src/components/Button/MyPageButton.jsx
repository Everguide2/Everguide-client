import {styled} from "styled-components";

// eslint-disable-next-line react/prop-types
const MyPageButton = ({text, onClick, active}) => {
  return (
      <CheckDeleteButton onClick={onClick} $active={active}>{text}</CheckDeleteButton>
  );
};

export default MyPageButton;


const CheckDeleteButton = styled.button`
  ${({ theme }) => theme.fonts.caption1}
  color: ${({ theme, $active }) => $active ? theme.colors.gray[700] : theme.colors.gray[300]};
  padding: 7px 21px;
  border-radius: 8px;
  border: 1px solid ${({ theme, $active}) => $active ? theme.colors.gray[700] : theme.colors.gray[200]};
  background-color: ${({ theme, $active }) => $active ? theme.colors.gray[50] : theme.colors.gray[100]};
`