import {createSlice} from "@reduxjs/toolkit";

export const detailSlice = createSlice({
  name: "detail",
  initialState: {
    category: "",
    title: "",
    subtitle: "",
    content: "",
  },
  reducers: {
    addArticle: (state, action) => {
      state.category = action.payload.category;
      state.title = action.payload.title;
      state.subTitle = action.payload.subTitle;
      state.content = action.payload.content;
      state.bookMark = action.payload.bookMark;
    }
  }
});

export const {addArticle} = detailSlice.actions;
export default detailSlice.reducer;