import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import dummy from "../dummy";
import theme from "../../../theme/theme";
import HaveResults from "../components/HaveRe/HaveResults";
import NoHaveResults from "../components/NoHaveRe/NoHaveResults";
import Count from "../components/Count";
import FindPolicy from "../components/FindPolicy";
const Search = () => {
  const { query } = useParams();
  const [categoryCount, setCategoryCount] = useState([0, 0, 0]);
  const [category, setCategory] = useState(["정책", "행사/교육", "일자리"]);

  const countCategory = (array) => {
    let updatedCategory = [0, 0, 0];
    array.forEach((item) => {
      if (item.category === "정책") {
        updatedCategory[0] += 1;
      } else if (item.category === "행사/교육") {
        updatedCategory[1] += 1;
      } else {
        updatedCategory[2] += 1;
      }
    });
    setCategoryCount(updatedCategory);
  };
  useEffect(() => {
    if (dummy[query]) {
      countCategory(dummy[query]);
    }
  }, [query]);

  return (
    // API 통신 시, Redux-toolkit 적용 예정
    <Wrapper>
      <Count dummy={dummy} query={query} />
      <SearchDetails>
        {dummy[query] ? (
          <HaveResults
            dummy={dummy}
            query={query}
            category={category}
            categoryCount={categoryCount}
          />
        ) : (
          <NoHaveResults query={query} category={category} />
        )}
        <FindPolicy />
      </SearchDetails>
    </Wrapper>
  );
};
export default Search;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;
const SearchDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;
