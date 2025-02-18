import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  policyInfo: [],
  eventInfo: [],
  jobInfo: [],
  queryName: "",
  category: ["정책", "행사/교육", "일자리"],
  categoryCount: [0, 0, 0],
};

const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setPolicyInfo(state, action) {
      const sortedPolicies = [...action.payload].sort((a, b) => {
        const dateA = new Date(a.lastModified);
        const dateB = new Date(b.lastModified);
        return dateB - dateA;
      });
      state.policyInfo = sortedPolicies;
    },
    setEventInfo(state, action) {
      const sortedEvents = [...action.payload].sort((a, b) => {
        const remainingA = parseInt(a.remainingPeriod, 10);
        const remainingB = parseInt(b.remainingPeriod, 10);

        // -1은 첫 번째로 오게, 0은 두 번째로 오게, 나머지 숫자는 마지막에 오게
        if (remainingA === -1) return -1;
        if (remainingB === -1) return 1;
        if (remainingA === 0) return -1;
        if (remainingB === 0) return 1;

        return remainingA - remainingB;
      });
      state.eventInfo = sortedEvents;
    },
    setJobInfo(state, action) {
      const sortedJobs = [...action.payload].sort((a, b) => {
        const remainingA = parseInt(a.remainingPeriod, 10);
        const remainingB = parseInt(b.remainingPeriod, 10);

        // -1은 첫 번째로 오게, 0은 두 번째로 오게, 나머지 숫자는 마지막에 오게
        if (remainingA === -1) return -1;
        if (remainingB === -1) return 1;
        if (remainingA === 0) return -1;
        if (remainingB === 0) return 1;

        return remainingA - remainingB;
      });
      state.jobInfo = sortedJobs;
    },
    setQuery(state, action) {
      state.queryName = action.payload;
    },
    setCategory(state, action) {
      // 카테고리 설정
      state.category = action.payload;
    },
    setCategoryCount(state, action) {
      // 카테고리별 개수 설정
      state.categoryCount = action.payload;
    },
    countCategory(state, action) {
      state.categoryCount = [
        state.policyInfo.length, // 정책 개수
        state.eventInfo.length, // 행사/교육 개수
        state.jobInfo.length, // 일자리 개수
      ];
    },
  },
});

export const {
  setEventInfo,
  setPolicyInfo,
  setJobInfo,
  setQuery,
  setCategory,
  setCategoryCount,
  countCategory,
} = SearchSlice.actions;

export default SearchSlice.reducer;
