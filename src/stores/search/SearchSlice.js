import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dummy: [],
  queryName: "",
  category: ["정책", "행사/교육", "일자리"],
  categoryCount: [0, 0, 0],
};

const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setDummy(state, action) {
      state.dummy = action.payload;
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
      // 카테고리별 데이터 개수 계산
      const updatedCategory = [0, 0, 0];
      action.payload.forEach((item) => {
        if (item.category === "정책") {
          updatedCategory[0] += 1;
        } else if (item.category === "행사/교육") {
          updatedCategory[1] += 1;
        } else {
          updatedCategory[2] += 1;
        }
      });
      state.categoryCount = updatedCategory;
    },
  },
});

export const {
  setDummy,
  setQuery,
  setCategory,
  setCategoryCount,
  countCategory,
} = SearchSlice.actions;

export default SearchSlice.reducer;
