import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import searchDummy from "../dummy";
import theme from "../../../theme/theme";
import { useSelector, useDispatch } from "react-redux";
import { setDummy, setQuery, countCategory } from "@stores/search/SearchSlice.js";
import HaveResults from "../components/HaveRe/HaveResults";
import NoHaveResults from "../components/NoHaveRe/NoHaveResults";
import Count from "../components/Count";
import FindPolicy from "../components/FindPolicy";
const Search = () => {
  const { query } = useParams();
  const { dummy, queryName, category, categoryCount } = useSelector(
    (state) => state.Search
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDummy(searchDummy));
  }, []);

  useEffect(() => {
    dispatch(setQuery(query));
  }, [query]);

  useEffect(() => {
    if (dummy[queryName]) {
      dispatch(countCategory(dummy[queryName]));
    }
  }, [queryName]);

  return (
    // API 통신 시, Redux-toolkit 적용 예정
    <Wrapper>
      <Count />
      <SearchDetails>
        {dummy[queryName] ? <HaveResults /> : <NoHaveResults />}
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
