import {createSlice} from "@reduxjs/toolkit";

export const pagingSlice = createSlice({
  name: "paging",
  initialState:{
    activePage: 1,
    itemsCount: 0,
    totalItems: 0,
    pageRange: 0,
  },
  reducers: {
    setPage: (state, action) => {
      state.activePage = action.payload.activePage;
      state.itemsCount = action.payload.itemsCount;
      state.totalItems = action.payload.totalItems;
      state.pageRange = action.payload.pageRange;
    }
  }
});

export const {setPage} = pagingSlice.actions;
export default pagingSlice.reducer;