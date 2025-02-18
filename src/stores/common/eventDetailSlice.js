import {createSlice} from "@reduxjs/toolkit";

export const eventDetailSlice = createSlice({
  name: "detail",
  initialState: {
    category: "",
    title: "",
    subtitle: "",
    content: "",
  },
  reducers: {
    addEventArticle: (state, action) => {
      state.category = action.payload.category;
      state.title = action.payload.title;
      state.subTitle = action.payload.subTitle;
      state.content = action.payload.content;
      state.bookMark = action.payload.bookMark;
    }
  }
});

export const {addEventArticle} = eventDetailSlice.actions;
export default eventDetailSlice.reducer;