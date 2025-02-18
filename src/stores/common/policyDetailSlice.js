import {createSlice} from "@reduxjs/toolkit";

export const policyDetailSlice = createSlice({
  name: "detail",
  initialState: {
    category: "",
    title: "",
    subtitle: "",
    content: "",
  },
  reducers: {
    addPolicyArticle: (state, action) => {
      state.category = action.payload.category;
      state.title = action.payload.title;
      state.subTitle = action.payload.subTitle;
      state.content = action.payload.content;
      state.bookMark = action.payload.bookMark;
    }
  }
});

export const {addPolicyArticle} = policyDetailSlice.actions;
export default policyDetailSlice.reducer;