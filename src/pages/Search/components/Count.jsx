import React from "react";
import styled from "styled-components";
import theme from "../../../theme/theme";
import { useSelector } from "react-redux";
const Count = () => {
  const { categoryCount, queryName } = useSelector((state) => state.Search);
  let totalCount = categoryCount.reduce(
    (total, current) => (total += current),
    0
  );

  return (
    <SearchCount>
      <CountResult>
        <QueryText>{queryName}</QueryText>에<CountText>{totalCount}</CountText>
        개의 검색결과가 있습니다.
      </CountResult>
    </SearchCount>
  );
};

export default Count;

const CountResult = styled.div`
  width: 1100px;
  display: flex;
  ${({ theme }) => theme.fonts.subHeader1};
`;
const SearchCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
`;
const QueryText = styled.span`
  color: #ffbf00;
`;
const CountText = styled.span`
  color: #ffbf00;
  margin-left: 7px;
`;
