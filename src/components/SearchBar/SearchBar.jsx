
import { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import {icSearch} from "@assets/index.js";

// eslint-disable-next-line react/prop-types
const SearchBar = ({ placeHolder, onClick }) => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    navigate(`search/${searchValue}`);
  };
  // 엔터 키 눌렀을 시에도 이동동
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Container>
      <SearchInput
        type="search"
        placeholder={placeHolder}
        onChange={onChange}
        value={searchValue}
        onKeyDown={handleKeyPress}
      />
      <SearchIcon src={icSearch} alt="ic-search" onClick={handleSearch} />
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  position: relative;
  input::placeholder {
    ${({ theme }) => theme.fonts.body4};
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;
const SearchInput = styled.input`
  width: 556px;
  height: 52px;
  background: ${(props) => props.theme.colors.gray[100]};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 33px;
  padding-left: 17px;
`;

const SearchIcon = styled.img`
  width: 28px;
  height: 28px;
  position: absolute;
  right: 17px;
  top: 50%;
  transform: translateY(-50%);
`;
