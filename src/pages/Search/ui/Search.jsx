import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import searchDummy from "../dummy";
import theme from "../../../theme/theme";
import { useSelector, useDispatch } from "react-redux";
import {
  setPolicyInfo,
  setJobInfo,
  setEventInfo,
  setQuery,
  countCategory,
} from "@stores/search/SearchSlice.js";
import HaveResults from "../components/HaveRe/HaveResults";
import NoHaveResults from "../components/NoHaveRe/NoHaveResults";
import Count from "../components/Count";
import FindPolicy from "../components/FindPolicy";
const Search = () => {
  const { query } = useParams();
  const { policyInfo, eventInfo, jobInfo, queryName } = useSelector(
    (state) => state.Search
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // 초기화
    dispatch(setPolicyInfo([]));
    dispatch(setEventInfo([]));
    dispatch(setJobInfo([]));

    // 새로운 데이터 설정
    if (searchDummy[query]) {
      dispatch(setPolicyInfo(searchDummy[query].정책));
      dispatch(setEventInfo(searchDummy[query].행사_교육));
      dispatch(setJobInfo(searchDummy[query].일자리));
    }
  }, [query]); // query가 변경될 때마다 실행됨

  useEffect(() => {
    dispatch(setQuery(query));
  }, [query]);

  useEffect(() => {
    if (queryName) {
      dispatch(countCategory());
    }
  }, [queryName]);

  return (
    // API 통신 시, Redux-toolkit 적용 예정
    <Wrapper>
      <Count />
      <SearchDetails>
        {policyInfo.length || eventInfo.length || jobInfo.length ? (
          <HaveResults />
        ) : (
          <NoHaveResults />
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
