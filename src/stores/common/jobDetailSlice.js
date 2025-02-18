import {createSlice} from "@reduxjs/toolkit";

export const jobDetailSlice = createSlice({
  name: "detail",
  initialState: {
    category: "",
    title: "",
    subtitle: "",
    content: "",
  },
  reducers: {
    addJobArticle: (state, action) => {
      state.category = action.payload.category;
      state.title = action.payload.title;
      state.subTitle = action.payload.subTitle;
      state.content = action.payload.content;
      state.bookMark = action.payload.bookMark;
    }
  }
});

export const {addPolicyArticle} = jobDetailSlice.actions;
export default jobDetailSlice.reducer;