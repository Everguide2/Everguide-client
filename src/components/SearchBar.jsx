import {styled} from "styled-components";
import {icSearch} from "../assets";

// eslint-disable-next-line react/prop-types
const SearchBar = ({placeHolder, onClick}) => {
  return (
      <Container>
        <SearchInput type="search" placeholder={placeHolder} />
        <SearchIcon src={icSearch} alt="ic-search" onClick={onClick} />
      </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  position: relative;
  input::placeholder {
    ${({theme}) => theme.fonts.body4};
    color: ${({theme}) => theme.colors.gray[500]};
  }
`
const SearchInput = styled.input`
  width: 556px;
  height: 52px;
  background: ${props => props.theme.colors.gray[100]};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 33px;
  padding-left: 17px;
`

const SearchIcon = styled.img`
  width: 28px;
  height: 28px;
  position: absolute;
  right: 17px;
  top: 50%;
  transform: translateY(-50%);
`